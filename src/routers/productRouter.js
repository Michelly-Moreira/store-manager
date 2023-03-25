const express = require('express');
const validateProduct = require('../middlewares');
const { productsControllers } = require('../controllers');

const router = express.Router();

router.get('/', productsControllers.getAllProducts);
router.get('/:id', productsControllers.getProduct);
router.post('/', validateProduct, productsControllers.createProduct);

module.exports = router;