// utilizar esse objeto como mock da função createProduct que ainda vou implementar.
const productMock = {
  name: 'ProdutoX',
};

// utilizar esse objeto como mock da função createProduct que ainda vou implementar.
const newProductMock = { id: 1, ...productMock };

// Esse é o array que utilizei no teste da função findAll
const productListMock = [newProductMock];

module.exports = {
  productMock,
  newProductMock,
  productListMock,
};