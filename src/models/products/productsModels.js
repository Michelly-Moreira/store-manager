// connection dá acesso ao banco de dados
const connection = require('../connection');

const findAll = async () => {
 const [result] = await connection.execute(
    'SELECT * FROM products ORDER BY id ASC',
 );
  return result;
};

const findById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ? ORDER BY id ASC',
    [productId],
  );
  return product;
};

const createProduct = async (name) => {
const [{ insertId }] = await connection.execute(
  'INSERT INTO products (name) VALUES (?)',
  [name],
);
  return insertId;
};

const setById = async (name, id) => {
  await connection.execute(
    'UPDATE products SET name = ? WHERE id = ? ',
    [name, id],
  );
 
  return { id, name };
};

const remove = async (id) => {
  await connection.execute(
    'DELETE FROM products WHERE id = ?',
    [id],
  );
};

module.exports = {
  findAll,
  findById,
  createProduct,
  setById,
  remove,
};