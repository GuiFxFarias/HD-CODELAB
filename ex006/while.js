// while usado pra repetir inumeras vezes

let vezes = 0

while (new Date().getSeconds() > 30) {
  console.log(new Date().getSeconds());
  vezes++;
}

console.log("Terminou",new Date().getSeconds(), `Vezes: ${vezes}`);
 

// do while, primeiro executa o bloco de comandos, depois verifica