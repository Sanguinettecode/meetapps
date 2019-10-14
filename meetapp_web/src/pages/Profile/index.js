import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import { updateUserRequest } from '../../store/modules/User/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const dataUser = useSelector(state => state.User.profile);
  function handleSubmit(data) {
    dispatch(updateUserRequest(data));
  }
  return (
    <Container>
      <Form initialData={dataUser} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu melhor e-mail" />
        <hr />
        <Input name="oldpassword" type="password" placeholder="Senha atual" />
        <Input name="password" type="password" placeholder="Nova Senha" />
        <Input
          name="confirmPassword"
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
