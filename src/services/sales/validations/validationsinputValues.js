/* const Joi = require('joi');
const { addSalesSchema } = require('./schema');

const validateNewSale = (productId, quantity) => {
  const saleSchema = Joi.array().items(addSalesSchema);
  const { error } = saleSchema.validate({ productId, quantity });

  if (error) {
    return { type: 'Mi', message: error };
  }  
  return { type: null, message: '' };
};

module.exports = {
  validateNewSale,
}; */