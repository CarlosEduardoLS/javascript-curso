//parseInt, parseFloat, Number, toString
let n1 = 10
let n2 = '2'

console.log(n1 * n2, typeof n1, typeof n2)
console.log(n1 + n2, typeof n1, typeof n2) // 102

n2 = parseInt(n2)

console.log(n1 + n2, typeof n1, typeof n2) // 12

n2 = '12saopdasd'
n2 = parseInt(n2) // consegue converter caso o valor comece com um número

console.log(n1 + n2, typeof n1, typeof n2)

n2 = '12saopdasd'
n2 = Number(n2) // consegue converter somente se o valor for de fato um número

console.log(n1 + n2, typeof n1, typeof n2)

n2 = '12.9999'
n2 = parseFloat(n2) // consegue converter caso o valor comece com um número

console.log(n1 + n2, typeof n1, typeof n2)

// decimais 0 - 9
// hexadecimais 0 - f

n2 = 12
n2 = n2.toString() // base decimal

console.log(n2, typeof n2)

n2 = 12
n2 = n2.toString(16) // base hexadecimal

console.log(n2, typeof n2)

n2 = 12
n2 = n2.toString(2) // base binária

console.log(n2, typeof n2)
