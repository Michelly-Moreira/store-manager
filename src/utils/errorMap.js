// mapeando o erro que o service retorna pro controller e relacionando com o status code que devo retornar
const errorMap = {
  NAME_IS_REQUIRED: 400,
  PRODUCT_ID_IS_REQUIRED: 400,
  QUANTITY_IS_REQUIRED: 400,
  PRODUCT_NOT_FOUND: 404,
  SALE_NOT_FOUND: 404,
  INVALID_VALUE: 422,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};