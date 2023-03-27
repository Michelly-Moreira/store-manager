const { expect } = require('chai');
const sinon = require('sinon');
const productsServices = require('../../../src/services');
const productsModels = require('../../../src/models');
const { invalidValue, validName, allProducts, withoutName } = require('../mocks/services/productsServicesMock');

describe('Verificando service de produtos', function () {
  afterEach(sinon.restore);

  it('Retorna a lista completa de produtos', async function () {
    // arrange
    sinon.stub(productsModels, 'findAll').resolves(allProducts);
    // act
    const result = await productsServices.findAll();
    // assert
    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(allProducts);
  });

  it('Retorna um erro caso receba um id inválido', async function () {
    const result = await productsServices.findById(invalidValue);

    expect(result.type).to.equal('PRODUCT_NOT_FOUND');
    expect(result.message).to.be.equal('Product not found')
  });

  it('Retorna o produto caso ID existente', async function () {
    sinon.stub(productsModels, 'findById').resolves(allProducts[0]);
    const result = await productsServices.findById(1);
    expect(result.type).to.equal(null)
    expect(result.message).to.deep.equal(allProducts[0]);// retorna array com primeiro item
  });
});

describe('Verificando service de cadastro de um produto', function () {
  afterEach(sinon.restore);

  it('Retorna um erro caso não haja valor na propriedade name', async function () {
    const result = await productsServices.createProduct(withoutName);
    expect(result.type).to.equal('NAME_IS_REQUIRED');
    expect(result.message).to.be.deep.equal('name  is required')
  })

  it('Retorna um erro ao passar um nome com tamanho menor que 5', async function () {
    const result = await productsServices.createProduct(invalidValue);
    expect(result.type).to.equal('INVALID_VALUE');
    expect(result.message).to.be.equal('name length must be at least 5 characters long')
  });

  it('Retorna o id do produto cadastrado', async function () {
    sinon.stub(productsModels, 'createProduct').resolves(1);
    sinon.stub(productsModels, 'findById').resolves(allProducts[0]);

    const result = await productsServices.createProduct(validName);
    
    expect(result.type).to.equal(null);
    expect(result.message).to.equal(allProducts[0]);
  })
});