// Arguments só são válidos para functions e functions expressions, eles não existem em arrow functions

function somar() {
  console.log(arguments);
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(somar(1, 2, 33, 2389, 1288, 58182391));

const somar2 = function () {
  console.log(arguments);
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};
console.log(somar2(33, 389, 188, 8231));

somar.name; // -> Retorna o nome da função 'somar'
somar2.name; // -> Retorna o nome da variável que recebe a função 'somar2'
