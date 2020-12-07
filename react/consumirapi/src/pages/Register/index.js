import React, { useState } from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <h1>Crie sua conta.</h1>
      <Form>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            placeholder="seu nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            placeholder="seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            type="password"
            value={password}
            placeholder="sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </Form>
    </Container>
  );
}
