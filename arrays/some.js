// Função 'some': Recebe como parâmetro uma função que retorna um booleano após checar todos os elementos do array e pelomenos 1 elemento do array
// retornar true.

let somenteNumeros2 = arr.some(function (el) {
  return typeof el === 'number'
})
