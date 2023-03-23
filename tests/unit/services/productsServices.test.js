const { expect } = require('chai');
const sinon = require('sinon');
const { productsServices } = require('../../../src/services');
const { productsModels } = require('../../../src/models');
const { products } = require('../mocks/products.model.mock');

describe('Verificando service de produtos', function () {
  afterEach(sinon.restore);

  it('Retorna a lista completa de produtos', async function () {
    // arrange
    sinon.stub(productsModels, 'findAll').resolves(products);
    // act
    const result = await productsServices.findAll();
    // assert
    expect(result.message).to.be.deep.equal(products);
  });

  it('Retorna o produto caso ID existente', async function () {
    sinon.stub(productsModels, 'findById').resolves(products[0]);
    const result = await productsServices.findById(1);
    expect(result.type).to.be.equal(null)
    expect(result.message).to.be.deep.equal(products[0]);// retorna array com primeiro item
  });

  it('Retorna um erro caso receba um id inválido', async function () {
    const result = await productsServices.findById('a');

    expect(result.type).to.be.equal('PRODUCT_NOT_FOUND');
    expect(result.message).to.be.equal('"Product not found"')
  })
});