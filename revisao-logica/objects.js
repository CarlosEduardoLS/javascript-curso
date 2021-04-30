const nomes = ['Daniel', 'Maria', 'João']
const idades = [40, 28, 35]
console.log(nomes[0], idades[0])

const pessoa = new Object()
pessoa.nome = 'Daniel'
pessoa.idade = 40
console.log(pessoa)
let prop = 'nome'
console.log(pessoa.nome)
console.log(pessoa[prop])
console.log(pessoa.idade)
console.log(pessoa['idade'])

const pessoa2 = {
  nome: 'Daniel',
  idade: 40,
  email: 'ela@server.com',
}
console.log(pessoa2)

for (let prop in pessoa2) {
  console.log(prop)
  console.log(pessoa[prop])
}

const produto = {
  nome: 'Caneta',
  qtd: 10,
  // ** Sintaxe Antiga **
  // comprar: function (n) {
  //   console.log(this)
  //   if (n > this.qtd) {
  //     return 'Quantidade não disponível'
  //   }
  //   this.qtd -= n
  // },
  comprar(n) {
    if (n > this.qtd) {
      return 'Quantidade não disponível'
    }
    return (this.qtd -= n)
  },
}
produto.comprar(3)
console.log(produto)
