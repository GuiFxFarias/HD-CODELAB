const user = {
  nome: "Manuelas",
  email: "manuelaSAN@gmail.com",
  senha: "123456",
};

const person = {
  nome: "MANUELA-SAN",
  idade: 19,
};

const union = Object.assign(user, person, { // Obejto do lado direito tem preferencia, se houver conflitos
    nome: 'MANUELA-SAMA'
});



console.log(union);
