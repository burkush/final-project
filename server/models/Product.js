const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    discount: {
      type: Number
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    shortDescription: {
      type: String,
      required: true
    },
    longDescription: {
      type: String,
      required: true
    },
    additionalInfo: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Product', productSchema);
