const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  //1) create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    Port: process.env.EMAIL_PORT,

    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  //2) Define the enail options

  const mailOptions = {
    from: 'touraelgon <emilykamiti@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    //html
  };
  //3) Actually send the email
  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
