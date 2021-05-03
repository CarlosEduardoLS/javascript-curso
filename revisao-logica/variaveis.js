// var, let, const

//var -> ES5 - cross-browser

//let, const -> ES6

// http://kangax.github.io/compat-table/es6/

// https://caniuse.com/?search=let

// com 'let' é possível atribuir outro valor para uma varíavel já criada
let string = 'minha string'
string = 10

// um dos perigos de se usar 'var' ao invés de 'let' ou 'const'
var teste = 'teste'
var teste = 10

// não é possível atribuir outro valor à uma 'const' já criada
// 'const' precisa ser inicializada com um valor
const teste2 = 'teste2'
