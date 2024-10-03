const mongoose = require('mongoose');
const validator = require('validator');

//name, email, photo, password, passwrordComfirm

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
    validate: [validator.isAlpha, 'user name must only contain characters'],
  },

  email: {
    type: String,
    reuqired: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'please provide a valid email'],
  },

  photo: {
    type: String,
    default: 'default.jpg',
  },

  password: {
    type: String,
    required: true,
    unique: true,
    minlegth: [8, 'password should be atleast 8 characters'],
  },

  passwordComfirmation: {
    type: String,
    required: [true, 'please confirm your password'],
    unique: true,
    minlegth: [8, 'password should be atleast 8 characters'],
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
