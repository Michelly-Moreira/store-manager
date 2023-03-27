const joi = require('joi');
// definições
const id = joi.number().integer().min(1).required();

const addSalesSchema = joi.object({
  productId: joi.number().integer().min(1).required(),
  quantity: joi.number().integer().min(1).required(),
});

module.exports = { id, addSalesSchema };