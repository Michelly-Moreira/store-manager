// connection dá acesso ao banco de dados
const connection = require('./connection');

const findAll = async () => {
 const [result] = await connection.execute(
    'SELECT * FROM products ORDER BY id ASC',
 );
  console.log(result);
  return result;
};
// findAll();

const findById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ? ORDER BY id ASC',
    [productId],
  );
  return product;
};

const createProduct = async (name) => {
const [{ insertId }] = await connection.execute(
  'INSERT INTO StoreManager.products (name) VALUES (?)',
  [name],
);
  // console.log(insertId);
  return insertId;
};

module.exports = {
  findAll,
  findById,
  createProduct,
};