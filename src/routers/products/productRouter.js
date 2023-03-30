const express = require('express');
const productsEmployeesValidation = require('../../middlewares/product');
const productsControllers = require('../../controllers/products');

const router = express.Router();

router.get('/', productsControllers.getAllProducts);
router.get('/:id', productsControllers.getProduct);
router.post('/', productsEmployeesValidation, productsControllers.createProduct);

module.exports = router;