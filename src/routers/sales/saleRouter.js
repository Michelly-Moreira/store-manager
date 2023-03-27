const express = require('express');
const salesControllers = require('../../controllers/sales');

const router = express.router();

router.post('./', salesControllers.createSale);

module.exports = router;
