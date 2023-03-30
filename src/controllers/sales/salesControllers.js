const salesServices = require('../../services/sales');

const createById = async (req, res, next) => {
  try {
    const saleId = req.body;
    const message = await salesServices.createSale(saleId);
    res.status(200).json(message);
  } catch (error) { // trouxe o erro do throw
    next(error); // trouxe o middleware com o erro correspondente
  }
};

const createSale = async (req, res, next) => {
  try {
    const saleBody = req.body;
    const message = await salesServices.createSale(saleBody);
    res.status(201).json(message);
  } catch (error) { // trouxe o erro do throw
    next(error); // trouxe o middleware com o erro correspondente
   }
};

module.exports = {
  createSale,
  createById,
};