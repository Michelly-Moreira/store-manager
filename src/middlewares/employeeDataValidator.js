// middleware do joi
const { addSalesSchema } = require('../joi/schemaSale');

module.exports = (req, res, next) => {
  const sale = req.body;
  const { error } = addSalesSchema.validate(sale);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

/*
const validationProduct = async (req, _res, next) => {
  const sale = req.
  // checando se na tabela product tem o id igual ao product_id da tabela sales_products
   const keyProduct = sales.map(({ productId }) => {
    const validation = productsModels.findById(productId);
    return validation;
  });
  const checks = await Promise.all(keyProduct);
  const verify = checks.some((check) => check === undefined);
  if (error) {
  if (verify) {
    return next({ status: 404, message: error.message });
  }
  }
  next(); 
};
*/