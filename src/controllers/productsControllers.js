const productsServices = require('../services');
const errorMap = require('../utils/errorMap'); // mapa relacionando erro com status code

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

const createProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsServices.createProduct(name);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
};