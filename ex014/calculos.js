function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function regraDeTres(a, b, c) {
  return dividir(multiplicar(c, b), a);
}

export default {
  somar,
  subtrair,
  dividir,
  regraDeTres,
  multiplicar,  
};
