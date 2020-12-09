enum Cores {
  VERMELHO,
  AZUL,
  AMARELO,
}

console.log(Cores.VERMELHO);
console.log(Cores.AZUL);
console.log(Cores.AMARELO);
console.log(Cores[0]);

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(0);
