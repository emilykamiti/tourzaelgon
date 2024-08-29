const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  // specifying shcema
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
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
