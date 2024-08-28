const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose.set('strictQuery', false); //please watch out for this line

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DBConnection successful');
  });

const tourSchema = new mongoose.Shcema({
  //specifying shcema
  name: {
    type: String,
    required: [true, 'A tour must have a name'], // validator
    unique: true,
  },

  rating: {
    type: Number,
    default: 4.5,
  },

  price: {
    type: Number,
    required: [true, 'The tour must have a price'],
  },
});
const Tour = mongoose.node('Tour', tourSchema);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
