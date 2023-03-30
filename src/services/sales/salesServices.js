const salesModels = require('../../models/sales');

const httpErrGenerator = (status, message) => ({ status, message });

const createById = async (saleId) => {
  const newProductId = await salesModels.insert(saleId); // cadastrando id e data da venda
  const newProduct = await salesModels.findById(newProductId); // recuperando o que foi cadastrado
  if (!newProduct.productId) throw httpErrGenerator(404, 'Sale not found');
};

const createSale = async (sale) => {
  const newSaleId = await salesModels.insert(sale);// cadastrando a sale
  const newSale = await salesModels.createById(newSaleId);// recuperando a sale cadastrada
  console.log(newSale);
  if (!newSale) throw httpErrGenerator(404, 'Product not found');
};

module.exports = {
  createSale,
  createById,
};
