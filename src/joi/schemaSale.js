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
/* 
const validation = await Promise.all(sales.map(
  async (sale) => productsModels.findById(sale.productId),
));
const validateProduct = sales.some((sale) => sale === undefined);
console.log(validation);
if (!validation) throw httpErrGenerator(404, 'Product not Found');
if (validateProduct) throw httpErrGenerator(404, 'Product not found');
 */

module.exports = { addSalesSchema };