require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/product');
const products = require('./products.json');

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.insertMany(products);
    console.log('Success');
  } catch (err) {
    console.log('This yo error:', err);
    process.exit = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedData();
