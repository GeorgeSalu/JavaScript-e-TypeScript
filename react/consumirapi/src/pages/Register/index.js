import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handlesubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('nome deve ter entre 3 e 255 caractres');
    }
    if (!isEmail(email)) {
      formErrors = true;
      toast.error('email invalido');
    }
    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('senha deve ter entre 6 e 50 caracteres');
    }

    if (formErrors) return;

    try {
      await axios.post('/users/', {
        nome,
        password,
        email,
      });
      toast.success('voce fez seu cadastro');
      history.push('/login');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);

      errors.map((error) => toast.error(error));
    }
  }

  return (
    <Container>
      <h1>Crie sua conta.</h1>
      <Form onSubmit={handlesubmit}>
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

        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  );
}
