import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '../../assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Meetapp" />
      <Form>
        <Input type="email" name="email" placeholder="Digite seu email" />
        <Input type="password" name="password" placeholder="senha" />
        <button type="submit">Entrar</button>
      </Form>
      <Link to="/registration">Criar conta grátis</Link>
    </>
  );
}
