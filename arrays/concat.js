let arr = [1, 2, 3]
let arr2 = [4, 5, 6]

// Função 'concat': Utilizada para concatenar 2 arrays em um só.

let arr3 = arr.concat(arr2, 7, 8, 9, [10, 11])
console.log(arr3) // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11

// * Uma das funcionalidades antigas da função concat era criar clones de arrays.

let arr4 = [].concat(arr3)
