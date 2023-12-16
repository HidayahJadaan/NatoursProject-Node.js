const mongoose = require('mongoose');

// CREATING SCHEMA (DESCRIPTION)
const toursSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
    },
    rating: {
      type: Number,
      default: 4.5,
    },
    price: {
      type: Number,
      required: [true, ' A tour must have a price'],
    },
  });
  // CREATING A MODEL
  const Tour = mongoose.model('Tour', toursSchema);
  
  module.exports = Tour;