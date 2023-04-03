const salesModels = require('../../models/sales');
// const salesProductsModels = require('../../models/salesProducts');

const httpErrGenerator = (status, message) => ({ status, message });

const createById = async (saleId) => {
  const saleDate = await salesModels.insert(saleId); // cadastrando id e data da venda
  const newSaleDate = await salesModels.findById(saleDate); // recuperando o que foi cadastrado
  if (!newSaleDate) throw httpErrGenerator(404, 'Sale not found');
  return newSaleDate;
};

// const createSale = async (sales) => {
  /* sales.map(async({ productId }) => {
    const validation = await productsModels.findById(productId);
    if (!validation) throw httpErrGenerator(404, 'Product not found'); */
  /* const newSaleId = await salesModels.createById(); // cadastrando a venda
  const insertProduct = sales.map(async (sale) => { // inserindo as vendas na tabela de vendas dos produtos
    const newSale = await salesProductsModels.insert(sale, newSaleId);
    if (!newSale) throw httpErrGenerator(404, 'Product not found');
    return newSale;
  });
  await Promise.all(insertProduct);
  return {
    id: newSaleId,
    itemsSold: sales,
  };
}; */

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
  createById,
  findAll,
  findById,
};
