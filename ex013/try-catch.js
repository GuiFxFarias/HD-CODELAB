function Excecao(msg) {
  this.message = msg;
  this.name = "Excecao";
}
function NaoNumeroExeception() {
  this.message = "É necessário informar um número";
  this.name = "NãoNúmeroExeception";
}

function dividir(a, b) {
  if (typeof a !== "number") {
    throw new NaoNumeroExeception();
  } else if (typeof b !== "number") {
    throw new NaoNumeroExeception();
  } else if (b === 0) {
    throw new Excecao("Não pode usar o número zero para a divisão");
  }
  return a / b;
}

try { //Sempre q existe uma exceção, o bloco try para de executar 
  console.log(dividir(10, 2));
  console.log(dividir(10, 1));
  console.log(dividir(10, 0));
} catch (erro) {
  console.error(erro);
}
