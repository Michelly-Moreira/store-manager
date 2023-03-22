const { expect } = require('chai');
const sinon = require('sinon');
const { productsModels } = require('../../../models/products');

const connection = require('../../../src/models/connection');
const { products } = require('./mocks/passenger.model.mock');

describe('Testes de unidade do model de produtos', function () {
  it('Recuperando a lista de produtos', async function () {
    // arrange
    // act
    // assert
  })

  afterEach(function () {
    sinon.restore();
  });
});

// Caso esteja utilizando barrel não existe problema algum em usar a desestruturação, pois nesses casos você estará importando um objeto e não uma função.
// Utilize o mocha, chai e sinon para escrever seus testes;
// Começar a escrever Os testes de unidade pela camada de models.
// Não escrever todos os testes de uma camada de uma vez!
// Ex: Crie a função de listar todos os produtos, escreva o teste da camada de models,
// depois service, por último controllers e vai para a próxima função...