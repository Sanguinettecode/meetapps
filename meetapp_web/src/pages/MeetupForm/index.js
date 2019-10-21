import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import BannerInput from './BannerInput';
import DatePicker from './DatePicker/index';
import { Container } from './styles';
import {
  createMeetupRequest,
  updateMeetupRequest,
} from '../../store/modules/Meetup/actions';
import 'react-datepicker/dist/react-datepicker.css';

export default function MeetupForm() {
  const dispatch = useDispatch();

  const meetupData = useSelector(state => state.Meetup.meetup);

  function handleUpdate(data) {
    dispatch(updateMeetupRequest(data));
  }
  function handleCreat(data) {
    dispatch(createMeetupRequest(data));
  }
  function handleSubmit(data) {
    if (data.id) {
      return handleUpdate(data);
    }
    return handleCreat(data);
  }

  return (
    <Container>
      <Form initialData={meetupData} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />
        <Input name="id" style={{ display: 'none' }} />
        <Input name="title" placeholder="Título do Meetup" />
        <Input name="description" placeholder="Descrição completa" multiline />
        <DatePicker name="date" placeholder="data do meetup" />
        <Input name="locale" placeholder="Localização" />
        <div className="buttonSubmit">
          <button type="submit">
            <MdAddCircleOutline />
            <span>{meetupData ? 'Editar meetup' : 'Salvar meetup'}</span>
          </button>
        </div>
      </Form>
    </Container>
  );
}
