// middleware do joi
// const productsModels = require('../../models/products');
const { addProductSchema } = require('../../joi/schemaProducts');

module.exports = (req, _res, next) => {
  const sale = req.body;
  const { error } = addProductSchema.validate(sale);
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
