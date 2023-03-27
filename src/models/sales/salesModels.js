// transforma os nomes das colunas de snake_caze para camelCase
// const camelize = require('camelize');
const snakeize = require('snakeize');
const db = require('../connection');

// as vendas enviadas devem ser salvas na tabela sales, por isso esta função
const findById = async (id) => {
  const [[sale]] = await db.execute(
    'SELECT * FROM sales WHERE id = ?',
    [id],
  );
  return sale;
};

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
  findById,
};
