const Joi = require('joi');
// definindo o esboço do Joi, mapeando na label os campos que o Joi valida
const addSalesSchema = Joi.object({
  productId: Joi.number().integer().min(1)
  .required()
  .label('productId'),
  quantity: Joi.number().integer().min(1)
  .required()
  .label('quantity'),
}).messages({
  'any.required': '{{#label}} is required',
  'number.min': '{{#label}} must be greater than or equal to {{#limit}}',
});

module.exports = { addSalesSchema };