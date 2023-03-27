// transforma os nomes das colunas de snake_caze para camelCase
// const camelize = require('camelize');
const snakeize = require('snakeize');
const db = require('../connection');

const insert = async (sale) => {
// transforma o nome das colunas, de snakeize para camelcase
  const columns = Object.keys(snakeize(sale)).join(', ');
// cria a quantidade de interrogações de acordo com a quantidade de colunas
  const placeholders = Object.keys(sale)
    .map((_key) => '?')
    .join(', ');

  const [{ saleId }] = await db.execute(
    `INSERT INTO sales_products (${columns}) VALUE (${placeholders})`,
    [...Object.values(sale)],
  );

  return saleId;
};

module.exports = {
  insert,
};
