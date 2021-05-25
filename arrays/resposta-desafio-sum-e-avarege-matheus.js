const sum = (...args) => [...args].reduce((sum, num) => sum + num, 0)

function avarege() {
  return sum(...arguments) / arguments.length
}

let soma = sum(1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log(soma)
