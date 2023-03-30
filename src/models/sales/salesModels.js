// transforma os nomes das colunas de snake_caze para camelCase
// const camelize = require('camelize');
// const snakeize = require('snakeize');
const db = require('../connection');

// as vendas enviadas devem ser salvas na tabela sales, por isso esta função
const createById = async () => {
  // console.log(id);
  const [{ sale }] = await db.execute(
    'INSERT INTO sales (date) VALUES (?)',
    [],
  );
  return sale;
};

const insert = async (sale) => {
  console.log(sale);
  const [{ saleId }] = await db.execute(
    'INSERT INTO sales_products (productId, quantity) VALUE (?, ?)',
    [...Object.values(sale)],
  );
  return saleId;
};

module.exports = {
  insert,
  createById,
};
