/* eslint-disable */
// tipos basicos
let nome: string = 'luiz'
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('quaquer-simbol');

// arrays
let arrayDeNumeros: Array<number> = [1,2,3,4];
let arrayDeStrings: Array<string> = ['a','b', 'c'];

//objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'luiz'
}

//funcoes
function soma(x: number, y: number): number {
  return x + y
}

const soma2: (x: number, y: number) => number = (x, y) => x + y
