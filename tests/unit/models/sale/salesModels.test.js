const { expect } = require('chai');
const sinon = require('sinon');
const salesModels = require('../../../../src/models/sales');

const connection = require('../../../../src/models/connection');
const { sales } = require('../../mocks/models/sale/salesModelsMock');

describe('Verificando model de vendas', function () {
  afterEach(sinon.restore); // reseta os dublês

  it('Recuperando uma sale através do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([sales[0]]);
    const result = await salesModels.findById(1);
    expect(result).to.be.deep.equal(sales[0]);// retorna array com primeiro item
  })
   
  it('Recuperando a lista de vendas', async function () {
    // arrange
    sinon.stub(connection, 'execute').resolves([sales]);
    // act
    const result = await salesModels.findAll();
    // assert
    expect(result).to.be.deep.equal(sales);
  })
/* 
  it('Recupero a data e a hora da venda', async function () {
    sinon.stub(connection, 'execute').resolves()

  }) */
});

// Caso esteja utilizando barrel não existe problema algum em usar a desestruturação, pois nesses casos você estará importando um objeto e não uma função.
// Utilize o mocha, chai e sinon para escrever seus testes;
// Começar a escrever Os testes de unidade pela camada de models.
// Não escrever todos os testes de uma camada de uma vez!
// Ex: Crie a função de listar todos os produtos, escreva o teste da camada de models,
// depois service, por último controllers e vai para a próxima função...
// Utilize o mocha, chai e sinon para escrever seus testes;
// Começar a escrever Os testes de unidade pela camada de models.
// Não escrever todos os testes de uma camada de uma vez!
// Ex: Crie a função de listar todos os produtos, escreva o teste da camada de models,
// depois service, por último controllers e vai para a próxima função...