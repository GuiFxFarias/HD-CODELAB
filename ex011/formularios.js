function pegarDados(evento) {
  evento.preventDefault();

  const formularos = document.querySelector("form");
  const dados = {};

  [...formularos.querySelectorAll("input")].forEach((tag) => {
    //pegar separadamente cada chave dos input
    dados[tag.name] = tag.value;
  });

  console.log(dados);

  const form = new FormData(formularos);

  // Duas formas de conseguir pegar os valores de cada input

  console.log(
    form.forEach((valor, chave) => {
      //pegar separadamente cada chave dos input
      console.log(chave, valor);
    })
  );
}
