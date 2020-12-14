export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return super.getNomeCompleto();
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'isso vem de cliente ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('luiz', 'miranda', 30, '000.000.000-00');
const aluno = new Aluno('luiz', 'miranda', 30, '000.000.000-00');
const cliente = new Cliente('luiz', 'miranda', 30, '000.000.000-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
