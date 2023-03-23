const { productsServices } = require('../services');
const { errorMap } = require('../utils/errorMap'); // mapa relacionando erro com status code

const getAllProducts = async (_req, res) => {
  const { type, message } = await productsServices.findAll();
  if (type) return res.status(errorMap.mapError(type)).json(message);
  res.status(200).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsServices.getProduct(id);
  if (type) return res.status(errorMap.mapError(type)).json(message);
  res.status(200).json(message);
};

module.exports = {
  getAllProducts,
  getProduct,
};