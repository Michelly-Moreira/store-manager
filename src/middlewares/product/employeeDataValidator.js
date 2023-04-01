// middleware do joi
// middleware do joi
const { addProductSchema } = require('../../joi/schemaProducts');

module.exports = (req, res, next) => {
  const sale = req.body;
  const { error } = addProductSchema.validate(sale);
  if (error) {
    if (error.details[0].type === 'any.required') {
      return next({ status: 400, message: error.message });
    }
    if (error.details[0].type === 'string.min') {
      return next({ status: 422, message: error.message });
    }
     // return res.status(400).json(error);
    // return res.status(400).json({ message: error.message });
  }
  next();
};