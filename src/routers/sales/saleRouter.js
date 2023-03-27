const express = require('express');
const validateSale = require('../../middlewares/sale');
const salesControllers = require('../../controllers/sales');

const router = express.Router();

router.post('/', validateSale, salesControllers.createSale);

module.exports = router;
