const mongoose = require('mongoose');

async function connectToMongoDB() {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    throw new Error('Please check your env variables');
  }
  await mongoose.connect(mongoURI);
  console.log('You successfully connected to MongoDB!');
}

module.exports = connectToMongoDB;
