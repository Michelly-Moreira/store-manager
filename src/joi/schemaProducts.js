const joi = require('joi');
// definições

const addProductSchema = joi.object({
  name: joi.string().min(5).max(50).required()
    .label('name'),
}).messages({
  'any.required': '{{#label}} is required',
  'name.min': '{{#label}} length must be at least 5 characters long',
});

module.exports = { addProductSchema, listById };