const { expect } = require('chai');
const sinon = require('sinon');
const salesModels = require('../../../../src/models/sales');

const connection = require('../../../../src/models/connection');
const { sales } = require('../../mocks/models/sale/salesModelsMock');

describe('Verificando model de vendas', function () {
  afterEach(sinon.restore); // reseta os dublês

  it('cadastrando uma venda', async function () {
  /*   const firstSale = { productId: 1, quantity: 1 }
    sinon.stub(productsModels, 'createProduct').resolves(firstSale);
    sinon.stub(productsModels, 'findById').resolves(sales[0]); */
  })
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