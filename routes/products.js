const express = require('express');
const router = express.Router();
const controller = require('../controllers/product');

router.get('/', controller.getAllProducts);

module.exports = router;
