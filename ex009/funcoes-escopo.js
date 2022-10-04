const calcularIdade = function (anoNascimento) { //'anoNascimento' só existe dentro da função
  const idade = new Date().getFullYear() - anoNascimento;

  return idade; // Só existe dentor da função 
};

console.log(calcularIdade(1977));
