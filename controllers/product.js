const responseBody = require('../utils/responseBody');
const Product = require('../models/product');
const changeFiltersToMongo = require('../utils/numericFilters');

async function getAllProducts(req, res) {
  const products = await Product.find();

  return responseBody(res, 200, 'Successfully loaded products', products);
}

async function getAllProductsQuery(req, res) {
  const { featured, company, title, sort, fields, numericFilter } = req.query;
  const updates = {};

  if (featured) {
    updates.featured = featured === 'true' ? true : false;
  }

  if (company) {
    updates.company = { $regex: company, $options: 'i' };
  }

  if (title) {
    updates.title = { $regex: title, $options: 'i' };
  }

  if (numericFilter) {
    const filters = numericFilter.split(',');

    const price = filters[0];
    const rating = filters[1];

    if (price) {
      updates.price = changeFiltersToMongo(price);
    }

    if (rating) {
      updates.rating = changeFiltersToMongo(rating);
    }
  }

  let result = Product.find(updates);

  if (sort) {
    const sortSplit = sort.split(',').join(' ');
    result = result.sort(sortSplit);
  } else {
    result.sort('createdAt');
  }

  if (fields) {
    const fieldsSplit = fields.split(',').join(' ');
    result = result.select(fieldsSplit);
  }

  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  const products = await result;

  return responseBody(res, 200, 'Successfully loaded products', products);
}

module.exports = {
  getAllProducts,
  getAllProductsQuery,
};
