const texto =
  '{"primeiroNome":"Manuela","ultimoNome":"San","coresFav":["vermelho","preto","roxo"],"idade":15}';

const object = JSON.parse(texto); // Transforma devolta em chave

console.log(object.primeiroNome);
console.log(object.coresFav)