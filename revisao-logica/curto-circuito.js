let n = 0

n = n || 10

console.log(n) // 10

let isValid = false

isValid = isValid || true // true

isValid && console.log('É valido')

isValid = false

isValid || console.log('não é valido')

0 && 'ola' // 0

0 || 'ola' // 'ola'

'ola' || 'mundo' // 'ola'

'ola' && 'mundo' // 'mundo'

n = true || 'ola' // true

NaN && 'ola mundo' // NaN

NaN || 'ola mundo' // ola mundo
