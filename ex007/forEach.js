
let paises = ["Brasil", "Peru", "Uruguai", "Chile", "Argentina"];


// forEach
paises.forEach(function (valor, indice) {
  // console.log(`Indice ${indice}: ${valor}`);
  // Alterado o valor de países pela frase 'é um país'
  // paises[indice] = `O ${valor} é um país`;
});

console.log(paises);

// Map
console.log(
  paises.map(function (valor, indice) {
    // Fez a mesma coisa do forEach
    return `Pais: ${valor}`;
  })
);


// Filter
console.log(
  paises.filter(function (valor, indice) {
    return valor.length > 5;
  })
);



// Reduce
const notaGui = [7, 8, 7, 5, 4, 6, 7, 8, 9, 8, 7, 8]; // Somou cada item com o reduce

const notaFinal = notaGui.reduce(function (total, valor) {
  return total + valor;
}, 0);

console.log(Math.ceil(notaFinal / notaGui.length));
console.log(Math.round(notaFinal / notaGui.length));