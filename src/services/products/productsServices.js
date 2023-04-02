const productsModels = require('../../models/products');

const httpErrGenerator = (status, message) => ({ status, message });

const findAll = async () => {
  const products = await productsModels.findAll();
  if (!products) throw httpErrGenerator(404, 'Product not found');
  return products;
};
// findAll();
const findById = async (id) => {
  const product = await productsModels.findById(id);
  if (!product) throw httpErrGenerator(404, 'Product not found');
  return product;
};

const createProduct = async (name) => {
  const newProductId = await productsModels.createProduct(name); // cadastrando o produto
  const newProduct = await productsModels.findById(newProductId); // recuperando o produto cadastrado
  if (!newProduct) throw httpErrGenerator(404, 'Product not found');
  return newProduct;
};

const setById = async (id, name) => {
  const product = await productsModels.setById(id, name);
  // const newValue = await productsModels.findById(product); // recuperando o produto atualizado
  if (!product) throw httpErrGenerator(404, 'Product not found');
  return product;
};

module.exports = {
  findAll,
  findById,
  createProduct,
  setById,
};
