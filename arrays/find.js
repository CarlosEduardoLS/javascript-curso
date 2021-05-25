let arr = [4, 5, 10, 20, 35, 4, 5]

// Função 'find': Retorna o primeiro valor encontrado que satisfaça a função, caso nenhum valor seja encontrado retorna undefined.

const find = arr.find(function (el) {
  return el > 10
})
