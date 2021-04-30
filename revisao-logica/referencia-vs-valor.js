function alteraArray(a) {
  a.push('Adicionado')
}

let arr = ['a']

console.log(arr) // -> ['a']
alteraArray(arr)
console.log(arr) // -> ['a', 'adicionado']

function alteraPrimitivo(p) {
  p += 'adicionado'
  console.log(' dentro da funcao: ', p) // dentro da funcao: mensagem adicionado
}
let msg = 'mensagem'
console.log(msg) // -> mensagem
alteraPrimitivo(msg)
console.log(msg) // -> mensagem
