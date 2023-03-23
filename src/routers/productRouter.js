const express = require('express');
const { productsControllers } = require('../controllers');

const router = express.Router();

router.get('/', productsControllers.getAllProducts);
router.get('/:id', productsControllers.getProduct);
router.post('/', productsControllers.registerProduct);

module.exports = router;