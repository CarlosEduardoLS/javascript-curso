let idade = 21
let paisPresentes = false
let comprouBilhete = false
const podeViajar = idade >= 18 || (paisPresentes && comprouBilhete) // true || (false && false) = true
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete // (true || false) && false = false
console.log(`Pode viajar: ${podeViajar}`)

let n1 = 6
let n2 = 8
let media = 0
media = n1 + n2 / 2 // Preferência pela divisão
media = (n1 + n2) / 2 // Preferência pela soma

if (comprouBilhete) {
  console.log('Sim. Comprou o bilhete')
} else {
  console.log('Não. Não comprou o bilhete')
}

// Negação
if (!comprouBilhete) {
  console.log('Não. Não comprou o bilhete')
} else {
  if (idade >= 18) {
    console.log('É maior de idade, pode viajar')
  } else {
    console.log('É menor de idade')
  }
}

if (n1 === 0 || n2 === 0) {
  console.log('Reprovado')
} else if (media < 7) {
  console.log('Reprovado, mas há como recuperar')
} else {
  console.log('Aprovado')
}

// Operador Ternário

let msg = ''

if (idade >= 18) {
  msg = 'É maior de idade'
} else {
  msg = 'É menor de idade'
}

// Mesmo resultado da expressão anterior

msg = idade >= 18 ? 'É maior de idade' : 'É menor de idade'
