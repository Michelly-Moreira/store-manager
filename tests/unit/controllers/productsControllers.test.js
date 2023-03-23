const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsServices } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const { products } = require('../mocks/products.controller.mock');

describe('Verficando Controllers de produtos', function () {
  afterEach(sinon.restore);

  it('Listando os produtos', async function () {
    const res = {};
    const req = {};
    const productsListMock = [products.allProductsMock];
    
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsServices, 'findAll')
      .resolves({ type: null, message: productsListMock });

    await productsController.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsListMock);
  });

  it('Buscando um produto por id', async function () {
    const res = {};
    const req = {
      params: { id: 1 },
    };
    const productId = [products.productIdMock];

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsServices, 'findById')
      .resolves({ type: null, message: productId });
    
    await productsController.getProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productId);
  });
});
