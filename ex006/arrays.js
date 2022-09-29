const valores = ["php", -25, new Date(), "farias"];

for (let i = 0; i < valores.length; i++) { //focado mais no contador, no indice
  console.log(valores[i]);
}

console.log("-------------------");

for (let valor of valores) { //valor DOS (of) valores (array)
  console.log(valor);
}
