// + - * / % **

let n1 = 10
let n2 = 5

// Operadores aritméticos

console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 % n2)
console.log(2 ** 3)

// Operadores de atribuição

let n3 = 20
// n3 = n3 + 15;
// n3 += 15;
// n3 -= 2;
// n3 *= 2;
// n3 /= 2;
// n3 %= 2;

// Incremento e Decremento

let i = 0

i = i + 1
i += 1
i++
++i

i = i - 1
i -= 1
i--
--i

// Comparação

/*
igualdade de valor ==
igualdede de valor e tipo ===
<, >, <=, >=
!= valores diferentes
!== valores e tipos diferentes
*/

// N1 = 10
console.log(n1 == '10') // true
console.log(n1 === '10') // false
console.log(n1 === 10) // true
console.log(n2 < 10) // true
console.log(n1 >= 10) // true
console.log(n1 <= 10) // true
console.log(n1 >= 11) // false
console.log(n1 <= 11) // true
console.log(n1 != '10') // false
console.log(n1 !== '10') // true

// Operadores lógicos
// && e, || ou, ! não

// ExpA  ExpB  e(&&) ou(||) ExpA  nãoA(!A)
// true  true  true  true   true  false
// true  false false true   false true
// false true  false true
// false false false false

// 5 bolas, 2 vermelhas e 3 azuis
// ExpA - Há mais de seis bolas - false
// ExpB - Há duas ou mais bolas azuis - true
// ExpA && ExpB - false
// ExpA || ExpB - true
// !ExpA - true

// Precedência de Operadores

/*
Para uma pessoa viajar para o exterior:
- precisa ser maior de 18 anos
OU
Acampanhado dos pais
E
ter comprado a passagem
*/

let idade = 21
let paisPresentes = false
let comprouBilhete = false
const podeViajar = idade >= 18 || (paisPresentes && comprouBilhete) // true || (false && false) = true
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete // (true || false) && false = false
console.log(`Pode viajar: ${podeViajar}`)

n1 = 6
n2 = 8
let media = 0
media = n1 + n2 / 2 // Preferência pela divisão
media = (n1 + n2) / 2 // Preferência pela soma
console.log(3 * 2 ** 2) //Preferência pela potência
console.log((3 * 2) ** 2) //Preferência pela multiplicação
