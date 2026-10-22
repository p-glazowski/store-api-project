require('dotenv').config();

const express = require('express');
const app = express();
const connectMongoDB = require('./config/db');

//middleware

//routes

//handlers

//server
const port = process.env.PORT || 8001;

async function startServer() {
  await connectMongoDB();
  try {
    app.listen(port, () => {
      console.log(`Server running on port ${port}...`);
    });
  } catch (err) {
    console.log(err);
    process.exitCode = 1;
  }
}

startServer();
