// Criar duas funções: sum() e avarege()
// - As funções podem receber 1 ou + parametros
// - Use e abuse das facilidades do ES6
// sum -> retornar a soma dos argumentos passados
// avarege -> retornar a media dos argumentos passados

function sum() {
  let sum = 0
  for (let num of arguments) sum += num
  return sum
}
console.log('\nFunção Sum -> ', sum(23, 45), '\n')

function avarege() {
  return sum(...arguments) / arguments.length
}
console.log('Função Avarege -> ', avarege(10, 20))
