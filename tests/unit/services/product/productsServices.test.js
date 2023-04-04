const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const productsServices = require('../../../../src/services/products');
const productsModels = require('../../../../src/models/products');
const { all, allProducts, invalidValue, validName, withoutName } = require('../../mocks/services/productsServicesMock');

const { expect } = chai;
chai.use(sinonChai);


describe('Verificando service de produtos', function () {

  it('Retorna a lista completa de produtos', async function () {
    // arrange
    sinon.stub(productsModels, 'findAll').resolves(allProducts);
    // act
    const result = await productsServices.findAll();
    // assert
    expect(result).to.be.deep.equal(allProducts);
  });

  // it('Retorna um erro caso receba um id inválido', async function () {
  //   const result = await productsServices.findById(invalidValue);
  //   console.log(result);
  //   expect(result.type).to.equal('PRODUCT_NOT_FOUND');
  //   expect(result).to.be.equal('Product not found')
  // });

    it('Retorna o produto caso ID existente', async function () {
    sinon.stub(productsModels, 'findById').resolves(allProducts[0]);
    const result = await productsServices.findById(1);
    // expect(result.type).to.equal(null)
    expect(result).to.deep.equal(allProducts[0]);// retorna array com primeiro item
  });
  afterEach(function (){ sinon.restore() });
});

describe('Verificando service de cadastro de um produto', function () {
  afterEach(sinon.restore);

   /*  it('Retorna um erro caso não haja valor na propriedade name', async function () {
    await expect(productsServices.createProduct(withoutName)).to.be.rejectedWith({
      message: 'name  is required',
      statusCode: 400
    });
  }) */

  // it('Retorna um erro ao passar um nome com tamanho menor que 5', async function () {
  //   const minLength = productsServices.createProduct(invalidValue);
  //   await expect(minLength).to.be.rejectedWith();
    /* await expect(productsServices.createProduct(invalidValue)).to.be.rejectedWith({
      message: 'name length must be at least 5 characters long',
      statusCode: 422
    }); 
  });*/

  it('Retorna o id do produto cadastrado', async function () {
    sinon.stub(productsModels, 'createProduct').resolves(1);
    sinon.stub(productsModels, 'findById').resolves(allProducts[0]);

    const result = await productsServices.createProduct(validName);
    
    expect(result).to.equal(allProducts[0]);
  })
  afterEach(function () { sinon.restore() });
});