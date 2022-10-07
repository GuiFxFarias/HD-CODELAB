function mostrarNome() {
  let bemVindo = document.querySelector("#boas-vindas");

  if (localStorage.getItem("nome")) {
    bemVindo.innerHTML = `Seja bem-vindo ${localStorage.getItem("nome")}`;
  }
}

function pegarDados(evento) {
  evento.preventDefault();

  const formularos = document.querySelector("form");
  const dados = {};

  [...formularos.querySelectorAll("input")].forEach((tag) => {
    //pegar separadamente cada chave dos input
    dados[tag.name] = tag.value;
    localStorage.setItem(tag.name, dados[tag.name]);
  });

  console.log(localStorage);
}
mostrarNome();
