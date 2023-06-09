// middleware do joi
const { addSalesSchema } = require('../joi/schemaSale');

module.exports = (req, res, next) => {
  const sale = req.body;
  const { error } = addSalesSchema.validate(sale);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};
