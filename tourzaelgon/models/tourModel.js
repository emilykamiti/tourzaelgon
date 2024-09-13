const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  // specifying shcema
  name: {
    type: String,
    required: [true, 'A tour must have a name'], // validator
    unique: true,
    trim: true,
    maxlength: [40, 'A tour name must have less or equal to 40 characters'],
    minlength: [10, 'A tour name must have more or equal to 10 characters'],
  },

  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },

  maxGroupSize: {
    type: Number,
    required: [true, 'a tour must have a group size '],
  },

  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
    enum: {
      values: ['easy', 'medium', 'difficult'],
      message: ' Difficulty is either  easy, medium or dificult',
    },
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be higher than 1.0'],
    max: [5, 'Rating must be lower than 5.0'],
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },

  price: {
    type: Number,
    required: [true, 'The tour must have a price'],
  },

  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a description'],
  },
  descriptiom: {
    type: String,
    trim: true,
  },

  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image'],
  },

  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  startDates: [Date],
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
