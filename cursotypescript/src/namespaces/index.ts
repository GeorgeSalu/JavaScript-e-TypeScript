/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
  const nome = 'luiz';

  class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNamespace('luiz');
  console.log(pessoa);
}
