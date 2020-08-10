//IEEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0

num1 = parseFloat(num1.toFixed(2)); // da pra fazer em parseFloat ou fazer aconta na unha

console.log(num1);
console.log(Number.isInteger(num1))

console.log(num1.toString() + num2); // não altera o valor do num1
//num1 = num1.toString(); // aqui ele ja transforma em string o valor do num1
console.log(num1.toString(2)); // colocando o 2 ele chama o num1 em binario
//console.log(typeof num1);
console.log(num1.toFixed(2)); // aqui ele mostra um arrendodamento , entre() coloco o tanto de casa depois da ,
console.log(Number.isInteger(num1)); // aqui ele retorna se ele é verdadeiro ou falso
let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)); // verifica se é NaN

