const arr = new Array()
const arr2 = new Array(true, 'Daniel', 28, new Array(2, 4, 10))
console.log(arr2)
arr[1] = 40
console.log(arr)
console.log(arr2[3][arr2[3].length - 1])
const arr3 = ['Daniel', 40, [3, 6, 9], true]
arr3[4] = 'Novo Valor'
arr3[arr3.length] = 'Novo Valor 2'
arr3.push('Adicionado com push()')
arr3.push('3', '2', '5')

console.log(arr3)
console.log(arr3[2])
console.log(arr3[2][0])

// Iterando array

const nomes = ['Joao', 'Maria', 'Jose', 'Helena']

for (let i = 0; i < nomes.length; i++) {
  console.log(`${i}º: Nome é ${nomes[i]}`)
}
