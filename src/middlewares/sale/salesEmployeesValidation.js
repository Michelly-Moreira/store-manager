// validação de joi para array
const Joi = require('joi');
const { addSalesSchema } = require('../../joi/schemaSale');

module.exports = (req, res, next) => {
  const sales = req.body;
  const employeeArraySchema = Joi.array().items(addSalesSchema);
  const { error } = employeeArraySchema.validate(sales);
  if (error) {
    if (error.details[0].type === 'any.required') {
      return next({ status: 400, message: error.message });
    }
    if (error.details[0].type === 'number.min') {
      return next({ status: 422, message: error.message });
    }
  }
  next();
};