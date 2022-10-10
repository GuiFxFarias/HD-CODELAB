export function somar(a, b) {
  return a + b;
}

export function subtrair(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

export function dividir(a, b) {
  return a / b;
}

export function regraDeTres(a, b, c) {
  return dividir(multiplicar(c, b), a);
}

/*
export default {
  somar,
  subtrair,
  dividir,
  regraDeTres,
  multiplicar,  
};
*/
