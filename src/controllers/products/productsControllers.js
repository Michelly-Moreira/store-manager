const productsServices = require('../../services/products');
// const errorMap = require('../../utils/errorMap'); // mapa relacionando erro com status code

const getAllProducts = async (_req, res, next) => {
  try {
  const message = await productsServices.findAll();
    return res.status(200).json(message);
  } catch (error) { // trouxe o erro do throw
    next(error); // trouxe o middleware com o erro correspondente
  }
};

const getProduct = async (req, res, next) => {
  try {
  const { id } = req.params;
  const message = await productsServices.findById(id);
  return res.status(200).json(message);
  } catch (error) { // trouxe o erro do throw
    next(error); // trouxe o middleware com o erro correspondente
  }
};

const createProduct = async (req, res, next) => {
  try {
    const { name } = req.body;
    const message = await productsServices.createProduct(name);
    res.status(201).json(message);
  } catch (error) { // trouxe o erro do throw
    next(error); // trouxe o middleware com o erro correspondente
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
};