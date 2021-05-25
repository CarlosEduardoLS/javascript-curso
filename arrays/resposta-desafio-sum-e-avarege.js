function sum() {
  // const numbers = Array.from(arguments)
  const numbers = [...arguments]
  console.log(numbers)
  console.log(numbers.reduce)
  return numbers.reduce(function (sum, atual) {
    return sum + atual
  }, 0)
}

function avarege() {
  return sum(...arguments) / arguments.length
}

let soma = sum(1, 2, 3, 4, 5)
console.log(soma)

function sum2() {
  Object.entries(arguments).forEach(print)
  return Object.values(arguments).reduce((sum, atual) => sum + atual, 0)
}

console.log(sum2(1, 2, 3, 4, 5))
