// Função 'filter': Retorna um novo array somente com os elementos que cumprem a função.

let filtro = arr.filter(function (el, i, _arr) {
  return typeof el === 'number'
})
