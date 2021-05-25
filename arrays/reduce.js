let arr = [1, 2, 3]

// Função 'reduce': Retorna um único valor atendendo à uma determinada função. Geralmente utilizado para somatoria de valores.
// a função reduce pode receber 2 parâmetros, sendo estes uma função e um tipo de retorno, o tipo de retorno indica em qual índice o acumulador iniciará,
// a função recebida por parâmetro pode conter um acumulador, o valor atual, um índice e o array original.

let soma = arr.reduce(function (acumulador, atual) {
  return acumulador + atual
})
console.log(soma)

const nomes = ['Daniel', 'Maria', 'Joana', 'João']
let nomesPorOrdem = nomes.reduce(function (nomes, nomeAtual) {
  let primeiraLetra = nomeAtual[0]
  if (nomes[primeiraLetra]) {
    nomes[primeiraLetra]++
  } else {
    nomes[primeiraLetra] = 1
  }
  return nomes
}, {})
console.log(nomesPorOrdem)
