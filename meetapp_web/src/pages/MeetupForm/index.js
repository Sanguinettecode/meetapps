import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input, Textarea } from '@rocketseat/unform';
import BannerInput from './BannerInput';
import { Container } from './styles';

export default function MeetupForm() {
  return (
    <Container>
      <BannerInput />
      <Form>
        <Input name="title" placeholder="Título do Meetup" />
        <Textarea name="description">teste</Textarea>
        <Input name="date" type="text" placeholder="Data do Meetup" />
        <Input name="locale" placeholder="Localização" />
        <div>
          <button type="submit">
            <MdAddCircleOutline />
            <span>Salvar meetup</span>
          </button>
        </div>
      </Form>
    </Container>
  );
}
