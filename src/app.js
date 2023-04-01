const express = require('express');
const productsControllers = require('./controllers/products');
const productRouter = require('./routers/products/productRouter');
const salesControllers = require('./controllers/sales');
const saleRouter = require('./routers/sales/saleRouter');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json()); // middleware que converte o buffy pra json

app.use('/products', productRouter);
app.use('/sales', saleRouter);

app.post('/', productsControllers.createProduct);
app.post('/', salesControllers.createSale);

app.use(errorHandler);

module.exports = app;