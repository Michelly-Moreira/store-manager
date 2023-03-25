// connection dá acesso ao banco de dados
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products ORDER BY id ASC',
  );
  return (result);
};

const findById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ? ORDER BY id ASC',
    [productId],
  );
  return (product);
};

const createProduct = async (product) => {
  const [{ name }] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [...Object.values(product)],
  );
  return (name);
};

module.exports = {
  findAll,
  findById,
  createProduct,
};