/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
  export const nome = 'luiz';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNamespace('luiz');
  console.log(pessoa);
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('luiz');
console.log(pessoaDoNamespace);
console.log(MeuNamespace.nome);
