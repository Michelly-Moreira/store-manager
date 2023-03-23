const express = require('express');
const { productsControllers } = require('../controllers');

// const validateProduct = require('../middlewares');

const router = express.Router();

router.get('/', productsControllers.getAllProducts);
router.get('/:id', productsControllers.getProduct);

module.exports = {
router,
};