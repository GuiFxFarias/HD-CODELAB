const objetoCalc = require("./calculos.js"); //importando função de outro arquivo
const {somar,multiplicar, dividir} = require('./calculos.js') //usando o destruct para usar certas funções


console.log(somar(1,5))
console.log(multiplicar(2,10))


console.log(objetoCalc)
console.log(objetoCalc.somar(10,5));
console.log(objetoCalc.regraDeTres(10,2,2))
