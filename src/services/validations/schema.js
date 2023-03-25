const joi = require('joi');
// definições
const idProduct = joi.number().integer().min(1).required();

const addProductSchema = joi.object({
  name: joi.string().min(5).max(50).required(),
});

module.exports = { idProduct, addProductSchema };