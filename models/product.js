const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Product name must be provided'],
    },
    price: {
      type: Number,
      required: [true, 'Price must be provided'],
      min: 1,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    company: {
      type: String,
      required: [true, 'Company must be provided'],
      enum: {
        values: ['ikea', 'liddy', 'caressa', 'marcos'],
        message: '{VALUE} is not supported',
      },
    },
    rating: {
      type: Number,
      default: 4.5,
    },
  },
  {
    timestamps: true,
  },
);

const product = mongoose.model('Product', productSchema);

module.exports = product;
