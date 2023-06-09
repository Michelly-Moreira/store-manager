const { expect } = require('chai');
const sinon = require('sinon');
const productsModels  = require('../../../../src/models/products');

const connection = require('../../../../src/models/connection');
const { products } = require('../../mocks/models/product/productsModelsMock');

describe('Verificando model de produtos', function () {
  afterEach(sinon.restore); // reseta os dublês

  it('Recuperando a lista de produtos', async function () {
    // arrange
    sinon.stub(connection, 'execute').resolves([products]);
    // act
    const result = await productsModels.findAll();
    // assert
    expect(result).to.be.deep.equal(products); 
  })

  it('Recuperando um produto através do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    const result = await productsModels.findById(1);
    expect(result).to.be.deep.equal(products[0]);// retorna array com primeiro item
  })

  it('cadastrando um produto com valores válidos', async function () {
    sinon.stub(productsModels, 'createProduct').resolves([{ name: 'ProdutoX' }]);
    sinon.stub(productsModels, 'findById').resolves(products[4]);
  })
});

// Caso esteja utilizando barrel não existe problema algum em usar a desestruturação, pois nesses casos você estará importando um objeto e não uma função.
// Utilize o mocha, chai e sinon para escrever seus testes;
// Começar a escrever Os testes de unidade pela camada de models.
