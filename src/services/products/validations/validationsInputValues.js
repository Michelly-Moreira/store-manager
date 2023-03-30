// retorna do service para o controler
const Joi = require('joi');
const { idProduct, addProductSchema } = require('./schema');

const validateId = (id) => {
  const { error } = idProduct.validate(id);
  if (error) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: '' };
};

const validateNewProduct = (name) => {
  // Quando uso o codigo anterior quebro a aplicação e quando uso este o 3 não passa
  const productSchema = Joi.array().items(addProductSchema);
  const { error } = productSchema.validate({ name });

  if (error) {
    return { type: 'Mi', message: error };
  }
  return { type: null, message: '' };
  /* const { error } = addProductSchema.validate(name);

    if (error.message.includes('is required')) {
      return { type: 'NAME_IS_REQUIRED', message: '"name"  is required' };
    } if (error.message.includes('length') && name.length < 5) {
        return {
          type: 'INVALID_VALUE', message: '"name" length must be at least 5 characters long',
        };
    }
    return { type: null, message: '' }; */
};

module.exports = {
  validateId,
  validateNewProduct,
};