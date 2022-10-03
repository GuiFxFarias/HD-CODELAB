const pessoa = {
  primeiroNome: "Manuela",
  ultimoNome: "San",
  coresFav: ["vermelho", "preto", "roxo"],
  idade: 15,
  mostrarNome: function(){
    return `${this.primeiroNome} ${this.ultimoNome}`
  }
};

console.log(pessoa);
console.log(pessoa.mostrarNome())
console.log(JSON.stringify(pessoa)); // Transforma em uma string
