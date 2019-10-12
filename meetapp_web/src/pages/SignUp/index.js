import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '../../assets/logo.svg';
import { signUpRequest } from '../../store/modules/Auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="Meetapp" />
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo " />
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="senha" />
        <button type="submit">Criar conta</button>
      </Form>
      <Link to="/">Já tenho login</Link>
    </>
  );
}
