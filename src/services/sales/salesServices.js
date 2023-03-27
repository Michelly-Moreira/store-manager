const salesModels = require('../../models/sales');
const validationsInputValues = require('./validations');

const createSale = async (productId, quantity) => {
  const error = validationsInputValues.validateNewSale(productId, quantity);
  if (error.type) return error;

  const newSaleId = await salesModels.insert(productId, quantity);
  const newSale = await salesModels.findById(newSaleId);

  return { type: null, message: newSale };
};

module.exports = createSale;