const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsServices } = require('../../../src/services');
const { productsControllers } = require('../../../src/controllers');
const { products } = require('../mocks/productsModelsMock');
// const { productMock } = require('../../tests/unit/mocks/productsControllersMock');

describe('Verficando Controllers de produtos', function () {
  afterEach(sinon.restore);

  it('Listando os produtos', async function () {
    const res = {};
    const req = {};
    const productsListMock = [products];
    
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsServices, 'findAll')
      .resolves({ type: null, message: productsListMock });

    await productsControllers.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsListMock);// a função res.json deverá ser chamada com o array retornado pelo service
  });

  it('Buscando um produto por id', async function () {
    const res = {};
    const req = {
      params: { id: 1 },
    };
    const productId = [products];

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsServices, 'findById')
      .resolves({ type: null, message: productId });
    
    await productsControllers.getProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productId);
  });
});
