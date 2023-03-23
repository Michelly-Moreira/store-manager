const joi = require('joi');
// definições
const idProduct = joi.number().integer().min(1).required();
const nameProduct = joi.string().min(3).max(50).required();

module.exports = { idProduct, nameProduct };