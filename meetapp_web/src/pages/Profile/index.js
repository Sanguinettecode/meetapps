import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
      <Form>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu melhor e-mail" />
        <hr />
        <Input name="oldpassword" type="password" placeholder="Senha atual" />
        <Input name="password" type="password" placeholder="Nova Senha" />
        <Input
          name="confirmpassword"
          type="password"
          placeholder="Confirmação de senha"
        />
        <div>
          <button type="submit">
            <MdAddCircleOutline />
            <span>Salvar perfil</span>
          </button>
        </div>
      </Form>
    </Container>
  );
}
