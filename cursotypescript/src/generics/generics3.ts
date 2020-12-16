interface PessoaProtocolo<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'luiz',
  sobrenome: 'miranda',
  idade: 30,
};

console.log(aluno1);
