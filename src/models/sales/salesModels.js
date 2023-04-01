// transforma os nomes das colunas de snake_caze para camelCase
// const camelize = require('camelize');
// const snakeize = require('snakeize');
const db = require('../connection');

// as vendas enviadas devem ser salvas na tabela sales, por isso esta função
const createById = async () => {
  const [{ sale }] = await db.execute(
    'INSERT INTO sales (date) VALUES (now())',
  );
  return sale;
};

const insert = async (sale) => {
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

/* // Transforma o nome das colunas, de snakeize para camelCase
  const columns = Object.keys(snakeize(sale)).join(', ');
  // Cria a quantidade de interrogações de acordo com a quantidade de colunas
  const placeholders = Object.keis(sale)
    .map((_key) => '?')
    .join(', ');
  
  const [saleId] = await db.execute(
    `INSERT INTO sales_products (${columns}) VALUES (${placeholders})`,
    [...Object.values(sale)],
  ); */