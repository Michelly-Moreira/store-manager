const { idProduct } = require('./schema');

const validateId = (id) => {
  const { error } = idProduct.validate(id);
  if (error) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: '' };
};

module.exports = { validateId };