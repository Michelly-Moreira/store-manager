const allProductsMock = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  }
];

const productIdMock = { id: 1, ...allProductsMock };


  
module.exports = {
  allProductsMock,
  productIdMock,
}