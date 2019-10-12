import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '../../assets/logo.svg';
import { authRequest } from '../../store/modules/Auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.Auth.loading);
  function handleSubit({ email, password }) {
    dispatch(authRequest(email, password));
  }
  return (
    <>
      <img src={logo} alt="Meetapp" />
      <Form onSubmit={handleSubit}>
        <Input type="email" name="email" placeholder="Digite seu email" />
        <Input type="password" name="password" placeholder="senha" />
        <button type="submit">{loading ? 'Carregando... ' : 'Entrar'}</button>
      </Form>
      <Link to="/registration">Criar conta grátis</Link>
    </>
  );
}
