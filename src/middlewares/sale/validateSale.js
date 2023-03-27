 const validateSale = (req, res, next) => {
  const { productId, quantity } = req.body;

  if (!productId) {
    return res.status(400).json({ message: 'productId is required' });
  }
  if (!quantity) {
    return res.status(400).json({ message: 'quantity is required' });
  }// checar a linha 10
  if (productId === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  if (quantity.length <= 0) {
    return res.status(404).json({ message: 'quantity must be greater than or equal to 1' });
  }
  return next();
 };

module.exports = validateSale;