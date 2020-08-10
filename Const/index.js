const nome = 'Gabryel';
const sobrenome = 'wapnyk';
const idade = 19;
const peso = 72;
const altura = 1.73;
let imc = peso/(altura*altura); //peso / (altura*altura)
let anoNascimento = 2020 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);
