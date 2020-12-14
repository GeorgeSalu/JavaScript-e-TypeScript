export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private cpf: string,
  ) {}

  getNome(): string {
    return this.nome;
  }

  getCpf(): string {
    return this.cpf;
  }
}

const pessoa = new Pessoa('luiz', 'miranda', 30, '000.000.000-00');
console.log(pessoa.getNome());
console.log(pessoa.getCpf());
