const user = {
  nome: "Manuelas",
  email: "manuelaSAN@gmail.com",
  senha: "123456",
};

const person = {
  nome: "MANUELA-SAN",
  idade: 19,
};

const union = Object.assign(user, person, {
  // Obejto do lado direito tem preferencia, se houver conflitos
  nome: "MANUELA-SAMA",
});

// console.log(typeof union);

//console.log(Object.keys(union)); ---- // Object keys

const values = Object.keys(union).forEach(function (valor) {
  union.nome = "Guilarme";
  console.log(union[valor]); // (variavel[valor]) -> access values ​​inside the keys
});

console.log("----------------------------");

// Another method for use
for (let key in union) {
  console.log(key);
}
