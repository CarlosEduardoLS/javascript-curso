// ;(function () {
//   const nomeUsuario = 'Carlos'
//   const elemento = document.querySelector('.top-bar p')
//   // elemento.textContent = 'Bem-vindo(a), ' + nomeUsuario
//   elemento.innerHTML += '<b>' + nomeUsuario + '</b>'
// })()

// ;(function () {
//   const nomeUsuario = null
//   const elemento = document.querySelector('.top-bar p')

//   if (nomeUsuario) {
//     // elemento.textContent = 'Bem-vindo(a), ' + nomeUsuario
//     elemento.innerHTML += '<b>' + nomeUsuario + '</b>'
//   } else {
//     elemento.parentElement.style.display = 'none'
//   }
// })()

;(function () {
  const nomeUsuario = null
  const elemento = document.querySelector('.top-bar p')

  if (nomeUsuario) {
    // elemento.textContent = 'Bem-vindo(a), ' + nomeUsuario
    elemento.innerHTML += '<b>' + nomeUsuario + '</b>'
  } else {
    // elemento.parentElement.style.display = 'none'
    // elemento.remove()
    const elementoParaRemover = elemento.parentElement
    elementoParaRemover.parentElement.removeChild(elementoParaRemover)
  }
})()
