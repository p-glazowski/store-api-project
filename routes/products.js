const express = require('express');
const router = express.Router();
const controller = require('../controllers/product');

router.get('/', controller.getAllProducts);
router.get('/search', controller.getAllProductsQuery);

module.exports = router;
