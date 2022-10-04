const exibirSobrenome = (sobrenome) => {
  console.log(sobrenome);
};

// exibirSobrenome("Farias");

const pessoas = ["Elias", "Manuela", "Farias"];

const nomesInvertidos = pessoas.map((valor) => {
  return valor.split("").reverse().join(""); // Inverter as palavras dentro do array
});

console.log(nomesInvertidos);
