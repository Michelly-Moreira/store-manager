const Joi = require('joi');
const { addProductSchema } = require('../../joi/schemaProducts');

module.exports = (req, res, next) => {
  const products = req.body;
  const employeeArraySchema = Joi.object().items(addProductSchema);
  const { error } = employeeArraySchema.validate(products);
  if (error) {
    if (error.details[0].type === 'any.required') {
      return next({ status: 400, message: error.message });
    }
    if (error.details[0].type === 'string.min') {
      return next({ status: 422, message: error.message });
    }
  }
  next();
};