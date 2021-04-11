// string, number (int, float), boolean, undefined, null, symbol (ES6)
//typeof - verificar o tipo de uma variável

let var1 = "minha string";
let var2 = 'minha "string" com aspas simples';
let var3 = `minha template literal`;

let idade = 24;
let msg = "eu possuo " + idade + " anos";
let msg2 = "eu possuo " + "24" + " anos";
let msg3 = `eu possuo ${idade} anos`;
console.log(typeof msg, typeof idade, typeof var1);

const n1 = 10;
const n2 = 1.1;
console.log(`O tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`O tipo de n2 é ${typeof n2} e seu valor é ${n2}`);

let isValid = false;
isValid = true;
console.log(`isValid: ${isValid}`);

let varUndefined;
console.log(`Tipo: ${typeof varUndefined}, valor: ${varUndefined}`);
varUndefined = 10;
console.log(`Tipo: ${typeof varUndefined}, valor: ${varUndefined}`);

let varNull = null;
console.log(`Tipo: ${typeof varNull}, valor: ${varNull}`);
