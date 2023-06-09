const express = require('express');
const productsControllers = require('../../controllers/products');// const productsEmployeesValidation = require('../../middlewares/product');
const { employeeDataValidator } = require('../../middlewares/product');

const router = express.Router();

router.get('/', productsControllers.getAllProducts);
router.get('/:id', productsControllers.getProduct);
router.post('/', employeeDataValidator, productsControllers.createProduct);
router.put('/:id', employeeDataValidator, productsControllers.setByUpdate);
router.delete('/:id', productsControllers.remove);  

module.exports = router;