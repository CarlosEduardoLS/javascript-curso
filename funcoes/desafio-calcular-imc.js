function imc(peso, altura) {
  let imc = 0;
  if (peso == undefined || altura == undefined) {
    return new Error(
      "Para a função funcionar corretamente, insira os 2 parâmetros necessários!"
    );
  }
  if (typeof peso !== "number" || typeof altura !== "number") {
    return new Error("Esta função recebe somente números");
  }
  imc = peso / (altura * altura);
  return classificaIMC(imc);
}

function classificaIMC(imc) {
  if (imc == undefined) {
    return new Error(
      "Para a função funcionar corretamente, insira o parâmetro necessário!"
    );
  }
  if (typeof imc !== "number") {
    return new Error("Esta função recebe somente números");
  }
  if (imc >= 16 && imc <= 16.9) {
    return "Muito abaixo do peso";
  } else if (imc >= 17 && imc <= 18.4) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    return "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    return "Acima do peso";
  } else if (imc >= 30 && imc <= 34.9) {
    return "Obesidade Grau I";
  } else if (imc >= 35 && imc <= 40) {
    return "Obesidade Grau II";
  } else if (imc > 40) {
    return "Obesidade Grau III";
  } else {
    return "O imc não pode ser classificado";
  }
}

console.log(imc(80, 1.83));
