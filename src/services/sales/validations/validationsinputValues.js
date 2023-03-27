const { addSalesSchema } = require('./schema');

const validateNewSale = (productId, quantity) => {
  const { error } = addSalesSchema.validate(productId, quantity);

  if (error.message.includes('is required')) {
    return { type: 'PRODUCT_ID_IS_REQUIRED', message: 'productId  is required' };
  } if (error.message.includes('length') && !productId) {
    return {
      type: 'PRODUCT_NOT_FOUND', message: 'Product not found',
    };
  }
  return { type: null, message: '' };
};

module.exports = {
  validateNewSale,
};