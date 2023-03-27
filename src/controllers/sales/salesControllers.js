const salesServices = require('../../services/products');
const errorMap = require('../../utils/errorMap');

const createSale = async (req, res) => {
  const { productId, quantity } = req.body;
  const { type, message } = await salesServices.createProduct(productId, quantity);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
};

module.exports = { createSale };