// Recebe como parâmetro uma função que retorna um booleano após checar todos os elementos do array e verificar se todos retornam true.
arr.every(function (el) {
  return typeof el === 'number'
})

// Função 'every': Recebe como parâmetro uma função que retorna um booleano após checar todos os elementos do array e verificar se todos retornam true.

let somenteNumeros = arr.every(function (el) {
  return typeof el === 'number'
})
