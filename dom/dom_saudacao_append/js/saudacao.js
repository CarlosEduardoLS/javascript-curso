;(function () {
  const nomeUsuario = 'Carlos'

  if (nomeUsuario) {
    const topBarElement = document.createElement('div')
    topBarElement.className = 'top-bar'
    topBarElement.innerHTML = `<p> Olá, <b> ${nomeUsuario} </b></p>`
    // Referência -> elementoPai.insertBefore(novoElemento, elementoReferencia)
    const parentElement = document.querySelector('.hero')
    console.log(parentElement.firstElementChild)
    parentElement.insertBefore(topBarElement, parentElement.firstElementChild)
  }
})()
