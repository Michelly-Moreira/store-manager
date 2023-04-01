const salesModels = require('../../models/sales');
// const productsModels = require('../../models/products');

const httpErrGenerator = (status, message) => ({ status, message });

const createById = async (saleId) => {
  const saleDate = await salesModels.insert(saleId); // cadastrando id e data da venda
  const newSaleDate = await salesModels.findById(saleDate); // recuperando o que foi cadastrado
  if (!newSaleDate) throw httpErrGenerator(404, 'Sale not found');
  return newSaleDate;
};

const createSale = async (sale) => {
  const newSaleId = await salesModels.insert(sale);// cadastrando a sale
  const newSale = await salesModels.createById(newSaleId);// recuperando a sale cadastrada
  if (!newSale) throw httpErrGenerator(404, 'Product not found');
  return newSale;
};

const findAll = async () => {
  const sales = await salesModels.findAll();
  if (!sales) throw httpErrGenerator(404, 'Sale not found');
  return sales;
};
// findAll();
const findById = async (id) => {
  const sale = await salesModels.findById(id);
  if (sale.length === 0) throw httpErrGenerator(404, 'Sale not found');
  return sale;
};

module.exports = {
  createSale,
  createById,
  findAll,
  findById,
};
