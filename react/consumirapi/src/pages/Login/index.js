import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { Form } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('email invalido');
    }
    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('senha deve ter entre 6 e 50 caracteres');
    }

    if (formErrors) return;
  };

  return (
    <Container>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="seu email"
        />

        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}
