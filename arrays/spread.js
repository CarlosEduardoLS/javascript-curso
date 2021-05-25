//Spread Operator

const arr = [1, 2, 3]
const arr2 = [4, 5, 6]

// sum(1, 2, 3)
// sum(...[1, 2, 3])
// sum(...sum)

arr.push(...arr2)
console.log(arr)
