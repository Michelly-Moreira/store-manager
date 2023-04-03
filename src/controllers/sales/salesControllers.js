const salesServices = require('../../services/sales');

const createById = async (req, res, next) => {
  try {
    const saleId = req.body;
    const message = await salesServices.createSale(saleId);
    return res.status(200).json(message);
  } catch (error) { // trouxe o erro do throw
    next(error); // trouxe o middleware com o erro correspondente
  }
};

  const createSale = async (req, res, next) => {
  try {
    const saleBody = req.body;
    const message = await salesServices.createSale(saleBody);
    return res.status(201).json(message);
  } catch (error) { // trouxe o erro do throw
    next(error); // trouxe o middleware com o erro correspondente
   }
};

const getAllSales = async (_req, res, next) => {
  try {
    const message = await salesServices.findAll();
    return res.status(200).json(message);
  } catch (error) { // trouxe o erro do throw
    next(error); // trouxe o middleware com o erro correspondente
  }
};

const getsaleById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const message = await salesServices.findById(id);
    return res.status(200).json(message);
  } catch (error) { // trouxe o erro do throw
    next(error); // trouxe o middleware com o erro correspondente
  }
};

module.exports = {
  createSale,
  createById,
  getAllSales,
  getsaleById,
};