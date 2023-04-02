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

const findAll = async () => {
  const [result] = await db.execute(
    `SELECT p.sale_id AS saleId, s.date, p.product_Id AS productId, p.quantity 
     FROM sales AS s
     JOIN sales_products AS p
     ON s.id = p.sale_id
     ORDER BY id ASC;`,
  );
  return result;
};

const findById = async (saleId) => {
  const [sale] = await db.execute(
    `SELECT s.date, p.product_Id AS productId, p.quantity 
     FROM sales AS s
     JOIN sales_products AS p
     ON s.id = p.sale_id
     WHERE s.id = ?
     ORDER BY id ASC;`,
    [saleId],
  );
  return sale;
};

module.exports = {
  insert,
  createById,
  findAll,
  findById,
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