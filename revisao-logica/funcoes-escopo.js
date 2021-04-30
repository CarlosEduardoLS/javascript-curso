let n = 'global'

function mostraN() {
  let n = 'local'
  console.log('valor de n no escopo local : ' + n)
}
mostraN()

console.log('Valor de n no escopo global: ' + n)

function fnExt() {
  let n = 'n local na função fnExt'
  function fnInt() {
    let n = 'n local na função fnInt'
    console.log(n)
  }
  fnInt()
  console.log(n)
}
fnExt()
