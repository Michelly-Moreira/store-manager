// verificar se existem os campos
module.exports = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'fiels not passed' });
  }
  return next();
};