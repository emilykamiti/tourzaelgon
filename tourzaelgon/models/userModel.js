const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

//name, email, photo, password, passwordConfirm

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
    validate: [validator.isAlpha, 'user name must only contain characters'],
  },

  email: {
    type: String,
    required: true,
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
    minlength: [8, 'password should be at least 8 characters'],
  },

  passwordConfirm: {
    type: String,
    required: [true, 'please confirm your password'],
    validate: {
      //this only works on CREATE and SAVE!!!
      validator: function (el) {
        return el === this.password; //abc === abc is true
      },
      message: 'passwords are not the same',
    },
  },
});

userSchema.pre('save', async function (next) {
  // only run this function if password was modified
  if (!this.isModified('password')) return next();

  // hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 16); // 12 is the cost parameter for hashing

  //delete the password confirm field
  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
