/* const express = require('express');
const connection = require('./models/connection');
const { productRouter } = require('./routers');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

const getProductById = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT FROM products WHERE id = ? ORDER BY id ASC',
    [id],
  );
  if (product) return true;
  return false;
};

app.use('/products', productRouter);
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app; */