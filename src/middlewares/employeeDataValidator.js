const employeeSchema = require('../services/sales/validations/schema');

module.exports = (req, res, next) => {
  const sale = req.body;
  const { error } = employeeSchema.validate(sale);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};