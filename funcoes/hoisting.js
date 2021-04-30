/*
Hoisting basicamente é a capacidade do JavaScript de "içar" uma função declarada para o topo da pilha de execução.
Isso se aplica para funções e variáveis, porém para variáveis, o que é "hoisteado" é somente a criação da variável.
*/

teste()

// Funciona normalmente
function teste() {
  console.log('teste')
}

// Não Funciona
const teste = function teste() {
  console.log('teste')
}

console.log(minhaVar)
var minhaVar = 'variavel'

// Funções auto-invocáveis

// ES5
function minhaFunc() {
  // Variável passa do escopo pois foi criada como var
  if (true) {
    var x = 10
  }
  console.log(x) // 10
}
console.log(x) // ERRO

function minhaFunc() {
  // Variável existe apenas dentro do escopo de bloco
  if (true) {
    let x = 10
  }
  console.log(x) // 10
}
console.log(x) // ERRO
