const txtEmail = document.getElementById('txtEmail')
const msgFeedback = document.getElementById('newsletterFeedback')

function cadastrarEmail() {
  let email = txtEmail.value
  console.log('Cadastrar Email')
  msgFeedback.innerHTML = `O email ${email} foi cadastrado com sucesso`
}
