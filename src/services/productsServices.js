const { productsModels } = require('../models');
const { validateId } = require('./validations/validationsInputValues');

const findAll = async () => {
  const products = await productsModels.findAll();
  console.log(products);
  return { type: null, message: products };
};

const findById = async (id) => {
  const error = validateId(id);
  if (error.type) return error;

  const product = await productsModels.findById(id);
  if (product) return { type: null, message: product };
  return { type: 'PRODUCT_NOT_FOUND', message: '"Product not found"' };
};

module.exports = {
  findAll,
  findById,
};
