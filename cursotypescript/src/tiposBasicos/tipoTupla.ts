const dadosCliente1: [number, string] = [1, 'luiz'];
const dadosCliente2: [number, string, string] = [1, 'luiz', 'miranda'];
const dadosCliente3: [number, string, string?] = [1, 'luiz'];
const dadosCliente4: [number, string, ...string[]] = [1, 'luiz', 'miranda'];

dadosCliente1[0] = 100;
dadosCliente1[1] = 'carlos';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
