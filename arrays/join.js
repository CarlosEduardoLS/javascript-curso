let arr = [1, 2, 3]

// Função 'join': Similar ao toString, apresenta uma representação em String do array selecionado, porém, recebe como parâmetro um elemento que será usado
// para separar o array.

console.log(arr.join())
console.log(typeof arr.join()) // String
console.log(arr.join(' - ')) // 1 - 2 - 3
