// Uma função auto-invocável (IIFE), nada mais é que uma função em JavaScript que é executada assim que definida,
// ou seja, assim que o arquivo é carregado.

// Função auto-invocável sem parâmetro
;(function () {
  let exemplo = true
  console.log('Exemplo', exemplo)
})()

// Função auto-invocável com parâmetro
;(function (win, doc) {
  let exemplo = true
  console.log('Window', win)
  console.log('Document', doc)
  console.log('Exemplo', exemplo)
})(window, document)
