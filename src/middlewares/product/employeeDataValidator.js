// middleware do joi
// middleware do joi
const { addProductSchema } = require('../../joi/schemaProducts');

module.exports = (req, res, next) => {
  const sale = req.body;
  const { error } = addProductSchema.validate(sale);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};