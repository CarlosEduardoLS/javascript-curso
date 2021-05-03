function media() {
  if (arguments.length <= 0) return 0
  let total = 0
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== 'number') {
      return new Error('Esta função recebe somente números!')
    }
    total += arguments[i]
  }
  return total / arguments.length
}
console.log(media())
console.log(media(2, 6))
console.log(media(2, 6, 1, 1, 2, 6))
console.log(media('2', '6'))
