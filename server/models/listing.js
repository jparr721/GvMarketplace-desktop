const mongo = require('mongoose');

let ListingSchema = new mongo.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  listedOn: {
    type: Date,
    required: true,
    trim: true,
    default: Date.now,
  },
});

let Listing = mongo.model('Listing', ListingSchema);

module.exports = Listing;
