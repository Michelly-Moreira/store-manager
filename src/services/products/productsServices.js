const productsModels = require('../../models/products');

const productNotFound = 'Product not found';
const httpErrGenerator = (status, message) => ({ status, message });

const findAll = async () => {
  const products = await productsModels.findAll();
  if (!products) throw httpErrGenerator(404, productNotFound);
  return products;
};
// findAll();
const findById = async (id) => {
  const product = await productsModels.findById(id);
  if (!product) throw httpErrGenerator(404, productNotFound);
  return product;
};

const createProduct = async (name) => {
  const newProductId = await productsModels.createProduct(name); // cadastrando o produto
  const newProduct = await productsModels.findById(newProductId); // recuperando o produto cadastrado
  if (!newProduct) throw httpErrGenerator(404, productNotFound);
  return newProduct;
};

const setById = async (name, id) => {
  await findById(id);
  const product = await productsModels.setById(name, id);
  // const newValue = await productsModels.findById(product); // recuperando o produto atualizado
  if (!product) throw httpErrGenerator(404, productNotFound);
  return {
    id,
    name,
  };
};

const remove = async (id) => {
  const findByIdDel = await productsModels.findById(id);
  if (!findByIdDel) throw httpErrGenerator(404, productNotFound);
  await productsModels.remove(id);
};

module.exports = {
  findAll,
  findById,
  createProduct,
  setById,
  remove,
};
