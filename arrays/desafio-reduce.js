// DESAFIO -> Utilizar o método reduce para transformar um array de números em um array de números únicos:
// [1, 3, 4, 1, 4, 5, 3, 5, 8, 9] -> [1, 3, 4, 5, 8, 9]

const arr = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]
let arrReduce = arr.reduce((newArray, atual) => {
  if (!newArray.includes(atual)) newArray.push(atual)
  return newArray
}, [])
console.log(arrReduce)
