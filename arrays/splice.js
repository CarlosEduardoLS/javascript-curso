let arr = [1, 2, 3, 4, 5]

// Função 'splice': Retorna um array modificado, recebe um índice de início, quantos números serão removidos à partir do índice, elementos para inserir
// e retorna um array sem os valores removidos.
// * Função 'splice' sempre altera o array original caso não seja atribuído à nenhuma variável *

let splice = arr.splice(2, 4, 'ola mundo')
console.log('SPLICE -> ', splice)
