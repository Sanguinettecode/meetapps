import React from 'react';
import { useSelector } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import BannerInput from './BannerInput';
import { Container } from './styles';

export default function MeetupForm() {
  const meetupData = useSelector(state => state.Meetup.meetup);
  return (
    <Container>
      <BannerInput />
      <Form initialData={meetupData}>
        <Input name="title" placeholder="Título do Meetup" />
        <Input name="description" placeholder="Descrição completa" multiline />
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
