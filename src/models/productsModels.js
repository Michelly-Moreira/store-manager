// connection dá acesso ao banco de dados
const connection = require('./connection');

const findAll = async () => {
 const [result] = await connection.execute(
    'SELECT * FROM products ORDER BY id ASC',
 );
    const formattedRows = result.map((row) => {
    const jsonString = JSON.stringify(row);
    return JSON.parse(jsonString);
  });
  // console.log(result);
  return formattedRows;
};

const findById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ? ORDER BY id ASC',
    [productId],
  );
  return product;
};

const createProduct = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [{ insertId }] = await connection.execute(query, [name]);
  /* const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [...Object.values(name)],
  ); */
  // console.log(insertId);
  return insertId;
};

module.exports = {
  findAll,
  findById,
  createProduct,
};