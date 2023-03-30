const express = require('express');
const salesEmployeesValidation = require('../../middlewares/sale');
const salesControllers = require('../../controllers/sales');

const router = express.Router();

router.post('/', salesEmployeesValidation, salesControllers.createSale);
router.post('/:id', salesEmployeesValidation, salesControllers.createById);
module.exports = router;
