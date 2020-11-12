/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"
*/
const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto'

console.log(corPadrao)