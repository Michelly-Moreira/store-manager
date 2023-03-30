const productsModels = require('../../models/products');
const validationsInputValues = require('./validations');

const httpErrGenerator = (status, message) => ({ status, message });

const findAll = async () => {
  const products = await productsModels.findAll();
  // console.log(products);
  return { type: null, message: products };
};
// findAll();
const findById = async (id) => {
  const error = validationsInputValues.validateId(id);
  if (error.type) return error;

  const product = await productsModels.findById(id);
  if (product) return { type: null, message: product };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

const createProduct = async (name) => {
  const newProductId = await productsModels.createProduct(name); // cadastrando o produto
  const newProduct = await productsModels.findById(newProductId); // recuperando o produto cadastrado
  if (!newProduct) throw httpErrGenerator(404, 'Product not found');
};

module.exports = {
  findAll,
  findById,
  createProduct,
};
