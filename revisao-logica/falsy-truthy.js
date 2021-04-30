// Falsy values - 0, "", NaN, undefined, null, false
// Truthy values - todos os demais

// true
if (true) {
  console.log('True')
} else {
  console.log('False')
}

// false
if (false) {
  console.log('True')
} else {
  console.log('False')
}

// false
if (0) {
  console.log('True')
} else {
  console.log('False')
}

// false
if ('') {
  console.log('True')
} else {
  console.log('False')
}

// false
if ('oi' * 2) {
  console.log('True')
} else {
  console.log('False')
}

// false
if (undefined) {
  console.log('True')
} else {
  console.log('False')
}

// false
if (null) {
  console.log('True')
} else {
  console.log('False')
}

// false

let n

if (n) {
  console.log('True')
} else {
  console.log('False')
}
