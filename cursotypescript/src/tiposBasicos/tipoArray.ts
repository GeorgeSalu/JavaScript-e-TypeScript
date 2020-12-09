// Array
function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

function maiusculas(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaStrings('a', 'b', 'c');
const upper = maiusculas('a', 'b', 'c');

console.log(concatenacao);
console.log(result);
console.log(upper);
