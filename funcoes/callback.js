function fn(cb) {
  console.log("Executar ação de callbacks");
  console.log(typeof cb);
  typeof cb === "function" && cb();
  console.log("Console após callback");
}

fn(function () {
  console.log("Função passada por parâmetro");
});

// Closure
function fn2(n1) {
  return function (n2) {
    return n1 * n2;
  };
}

const funcao2 = fn2(10);
const mult = funcao2(2);
console.log(mult);

function fn3() {
  return function () {
    console.log("Função retornada por parâmetro");
  };
}

const funcao3 = fn3();
funcao3();

function objeto() {
  objeto.count++;
  return function () {
    console.log("Uma função é como um objeto");
  };
}
objeto.count = 0;

const obj1 = objeto();
const obj2 = objeto();
const obj3 = objeto();
const obj4 = objeto();
const obj5 = objeto();
console.log(objeto.count);

function teste(cb) {
  console.log("Função teste");
  console.log(cb);
  cb("passado por parametro para callback");
}

// Função de callback sem parâmetro
const teste = function () {
  console.log("Função anônima de callback");
};

// Função de callback com parâmetro
const fn = function (param) {
  console.log("Função anônima de callback");
  console.log(param);
};

teste(fn);
