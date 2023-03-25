// retorna do service para o controler
const { idProduct, addProductSchema } = require('./schema');

const validateId = (id) => {
  const { error } = idProduct.validate(id);
  if (error) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: '' };
};

const validateNewProduct = (name) => {
  const { error } = addProductSchema.validate(name);

    if (error.message.includes('is required')) {
      return { type: 'NAME_IS_REQUIRED', message: 'name  is required' };
    } if (error.message.includes('length') && name.length < 5) {
        return {
          type: 'INVALID_VALUE', message: 'name length must be at least 5 characters long',
        };
    }
    return { type: null, message: '' };
};

module.exports = {
  validateId,
  validateNewProduct,
};