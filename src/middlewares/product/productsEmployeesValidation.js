const Joi = require('joi');
const { addProductSchema } = require('../../services/products/validations/schema');

module.exports = (req, res, next) => {
  const products = req.body;
  const employeeArraySchema = Joi.array().items(addProductSchema);
  const { error } = employeeArraySchema.validate(products);
  if (error) {
    if (error.details[0].type === 'any.required') {
      return next({ status: 400, message: error.message });
    }
    if (error.details[0].type === 'name.min') {
      return next({ status: 422, message: error.message });
    }
  }
  return res.status(201).json({ message: products });
};