const classifyIMC = imc => {
  const ratings = {
    '16 a 16,9': 'Muito abaixo do peso',
    '17 a 18,4': 'Abaixo do peso',
    '18,5 a 24,9': 'Peso normal',
    '25 a 29,9': 'Acima do peso',
    '30 a 34,9': 'Obesidade Grau I',
    '35 a 40': 'Obesidade Grau II',
    '40.1 a 400': 'Obesidade Grau III',
  }

  const ratingsKeys = Object.keys(ratings)
  const keysFormated = ratingsKeys.map(key => key.replace(/,/g, '.'))
  const nums = keysFormated.map(key => key.split(' a ').map(k => Number(k)))
  const index = nums.findIndex(num => imc >= num[0] && imc <= num[1])

  return ratings[ratingsKeys[index]] || 'Classificação inexistente'
}

const isNotNumeric = val => isNaN(val) || typeof val !== 'number'

const calcIMC = (weight, height) => {
  const someIsNaN = isNotNumeric(weight) || isNotNumeric(height)

  if (someIsNaN) {
    throw new Error('Todos os parametros devem ser numericos')
  }

  const imc = weight / (height * height)

  return classifyIMC(imc)
}
