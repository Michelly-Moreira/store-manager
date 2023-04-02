const connection = require('../connection');

const insert = async (id, sale) => {
  const [productSold] = await connection.execute(
    `INSERT INTO sales_products 
    (sale_id, product_id, quantity)
    VALUES (?, ?, ?)`,
    [id, sale.productId, sale.quantity],
  );
  return productSold;
};

const findById = async (id) => {
  const [sold] = await connection.execute(
    `SELECT productId, quantity
    FROM sales_products
    WHERE sale_id = ?')`,
    [id],
  );
  return sold;
};

module.exports = {
  insert,
  findById,
};