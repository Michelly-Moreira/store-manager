const express = require('express');
const productsControllers = require('./controllers/products');
const productRouter = require('./routers/products/productRouter');
const salesControllers = require('./controllers/sales');
const saleRouter = require('./routers/sales/saleRouter');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/products', productRouter);
app.use('/sales', saleRouter);

app.post('/', productsControllers.createProduct);

app.post('/', salesControllers.createSale);
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;