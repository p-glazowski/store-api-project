const responseBody = require('../utils/responseBody');
const Product = require('../models/product');

async function getAllProducts(req, res) {
  const products = await Product.find();

  return responseBody(res, 200, 'Successfully loaded products', products);
}

module.exports = {
  getAllProducts,
};
