require('dotenv').config();

const express = require('express');
const app = express();
const connectMongoDB = require('./config/db');
const notFoundPageMiddleware = require('./middleware/notFoundPageMiddleware');
const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');
const productRouter = require('./routes/products');

//middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
  return res.status(200).json({ msg: 'Api working' });
});

app.use('/api/products', productRouter);

//handlers
app.use(notFoundPageMiddleware);
app.use(errorHandlerMiddleware);

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
