const express = require('express');
const productsControllers = require('../../controllers/products');
const employeeDataValidator = require('../../middlewares/product');

const router = express.Router();

router.get('/', productsControllers.getAllProducts);
router.get('/:id', productsControllers.getProduct);
router.post('/', employeeDataValidator, productsControllers.createProduct);

module.exports = router;