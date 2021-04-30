// Funções não declaradas são de escopo global

//'use strict' // -> Utilizado para deixar o código mais seguro.
//let x = 10

function foo() {
  'use strict' // ativa o modo strict apenas dentro da função
  x = 20
}
foo()
console.log(x)

// Sem utilizar o modo strict é possível produzir códigos bizarros similares à este.
function dobrar(n1, n1) {
  console.log(n1, n1)
  return n1 * n1
}
console.log(dobrar(5, 7))

function Teste() {
  // neste escopo o strict mode transforma o this em undefined,
  // para que não seja possível utilizá-lo como uma propriedade Window
  'use strict'
  console.log(this)
  this.a = 'a'
}
Teste()
