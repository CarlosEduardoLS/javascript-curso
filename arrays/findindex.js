let arr = [4, 5, 10, 20, 35, 4, 5]

// Função 'findIndex': Retorna o índice do primeiro valor encontrado que satisfaça a função, caso nenhum valor seja encontrado retorna undefined.

const findIndex = arr.findIndex(function (el) {
  return el > 10
})
