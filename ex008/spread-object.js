const pessoa = {
  nome: "Manuela-san",
  idade: 15,
};

const user = {
  email: "manuelaSAN@gmail.com",
  senha: "123456",
};

console.log({ ...pessoa, ...user }); // Spreading objects
