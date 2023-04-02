// connection dá acesso ao banco de dados
const connection = require('../connection');

const findAll = async () => {
 const [result] = await connection.execute(
    'SELECT * FROM products ORDER BY id ASC',
 );
  // console.log(result);
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
  return insertId;
};

const setById = async (id, name) => {
  const [product] = await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?',
    [name, id],
  );
  return product;
};

module.exports = {
  findAll,
  findById,
  createProduct,
  setById,
};