class Pessoa {
  // Criação de um objeto
  constructor(nomePessoa, idadePessoa) {
    this.nome = nomePessoa;
    this.idade = idadePessoa;
  }
  // Get retorna atributos criados
  get idade() {
    return `A idade da pessoa é ${this.valorIdade}`; // Retornando o atributo criado do atributo idade
  }
  // Set cria atributos
  set idade(valor) { // Criando um atributo dentro do atributo idade
    this.valorIdade = Number(valor);
  }
}

const serHuman = new Pessoa("Guilherme", 19);

console.log(serHuman.nome, serHuman.idade);

const manuelaSan = {
  nome: "Manuela",
  idade: 19,
};

console.log(manuelaSan);
