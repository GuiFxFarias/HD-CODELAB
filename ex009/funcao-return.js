const calcularIdade = function (anoNascimento) {
  const idade = new Date().getFullYear() - anoNascimento;

  return idade;
};

console.log(calcularIdade(1977));
