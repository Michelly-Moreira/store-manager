const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productsServices = require('../../../src/services/products');
const productsControllers = require('../../../src/controllers/products');
const { productsListMock, newProductMock, productMock } = require('../mocks/controllers/productsControllersMock');

describe('Verficando Controllers de produtos', function () {
  afterEach(sinon.restore);
// arrange
  it('Listando os produtos', async function () {
    const res = {};
    const req = {};
    
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsServices, 'findAll')
      .resolves({ type: null, message: productsListMock });
// act
    await productsControllers.getAllProducts(req, res);
// assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsListMock);// a função res.json deverá ser chamada com o array retornado pelo service
  });

  it('Buscando um produto por id', async function () {
    const res = {};
    const req = {
      params: { id: 1 },
    };
// arrange
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsServices, 'findById')
      .resolves({ type: null, message: newProductMock });
// act
    await productsControllers.getProduct(req, res);
// assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(newProductMock);
  });

  it('Ao passar um id que não existe deve retornar um erro', async function () {
    const res = {};
    const req = {
      params: { id: 38 },
    };
// arrange
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productsServices, 'findById')
      .resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });
// act
    await productsControllers.getProduct(req, res);
//assert - avaiando se chamou res.status com o valor 404 e com a msgm esperada
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found'});

  })

  it('Cadastrando um produto', async function () {
    const res = {}
    const req = {
      body: productMock,
    }
// arrange
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productsServices, 'createProduct')
      .resolves({ type: null, message: newProductMock })
// act
    await productsControllers.createProduct(req, res)

// assert: Asserção para garantir que o status retornado vai ser 201 e que o json é o objeto newProductMock.
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProductMock);
  })

  it('ao passar a chave name sem valor retornar um erro', async function () {
    // Arrange
    const res = {};
    const req = {
      body: { name: ' ' },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    // Definindo o dublê do service retornando o contrato definido.
    sinon
      .stub(productsServices, 'createProduct')
      .resolves({ type: 'NAME_IS_REQUIRED', message: 'name  is required' });

    // Act
    await productsControllers.createProduct(req, res)

    // Assert
    // Avaliando se chamou `res.status` com o valor 400
    expect(res.status).to.have.been.calledWith(400);
    // Avaliando se chamou `res.status` com a mensagem esperada
    expect(res.json).to.have.been.calledWith({ message: 'name  is required' });
  });

  it('Retorna um erro ao passar um nome com menos de 5 caracteres', async function () {
// arrange
    const res = {}
    const req = {
      body: { name: 'oil' },
    };
// O dublê de `res.status` e`res.json`
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
// Definimos um dublê para `productsServices.createProduct` para retornar o erro no contrato estabelecido na camada Service 
    sinon
      .stub(productsServices, 'createProduct')
      .resolves({ type: 'INVALID_VALUE', message: 'name length must be at least 5 characters long' })
    
// act
    await productsControllers.createProduct(req, res)

// assert: Asserção para garantir que o status retornado vai ser 201 e que o json é o objeto newProductMock.
    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: 'name length must be at least 5 characters long' });
  })
});
