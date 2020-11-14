const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;  
let indiceMassaCorporal;
let anaNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM)
anaNascimento = 2019 - idade

console.log(nome + ' ' + sobrenome + ' tem '+ idade + ' anos, pesa '+peso + ' kg')
console.log('tem ', alturaEmM, 'de altura e seu imc é de ', indiceMassaCorporal);
console.log(nome, 'nasceu em ', anaNascimento)