const nomes = ['Daniel', 'Maria']
const pessoa = { nome: 'Daniel', idade: 10, email: '' }
const pessoa1 = {}

const pessoas = [
  {
    nome: 'Daniel',
    idade: 40,
  },
  {
    nome: 'Maria',
    idade: 28,
  },
  {
    nome: 'Helena',
    idade: 45,
  },
  {
    nome: 'João',
    idade: 40,
  },
]
console.log(pessoas)

for (let i = 0; i < pessoas.length; i++) {
  console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}

let a = 'a'

let _a = 'a'

// a == _a -> True

let b = []

let _b = []

// b == _b -> False

b = _b // -> agora as 2 variáveis estão apontado para o mesmo espaço na memória.

b[0] = 'Teste'
_b.push(true)
console.log(b) // -> ["Teste", true]
console.log(_b) // -> ["Teste", true]
