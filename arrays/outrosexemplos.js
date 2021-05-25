const user = {
  name: 'Matheus',
  idade: 24,
}

function manipular({ name }) {
  console.log(name)
}

manipular(user)

function print([key, value]) {
  console.log({ key }, { value })
}
