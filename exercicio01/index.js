let a = 4
let b = 2

console.log(`${a} + ${b} = ${a+b}`)

function calcular(n1, n2, operador){
    return eval(`${n1} ${operador} ${n2}`);
}

console.log(calcular(2, 5, '-'));
console.log(calcular(22, 5, '/'));