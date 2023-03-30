const productsServices = require('../../services/products');
const errorMap = require('../../utils/errorMap'); // mapa relacionando erro com status code

const getAllProducts = async (_req, res) => {
  const { type, message } = await productsServices.findAll();
  if (type) return res.status(errorMap.mapError(type)).json(message);
  res.status(200).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsServices.findById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
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