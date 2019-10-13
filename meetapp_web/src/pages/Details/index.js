import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdEvent, MdPlace, MdEdit, MdDeleteForever } from 'react-icons/md';
import { Container, MeetupDetails, Action } from './styles';
import { deleteMeetup } from '../../store/modules/Meetup/actions';

export default function Details() {
  const dispatch = useDispatch();
  const meetupData = useSelector(state => state.Meetup.meetup);
  return (
    <Container>
      <header>
        <strong>{meetupData.title}</strong>
        <nav>
          <Action to="/meetup">
            <MdEdit />
            <span>Editar</span>
          </Action>
          <button
            type="button"
            onClick={() => dispatch(deleteMeetup(meetupData.id))}
          >
            <MdDeleteForever />
            <span>Cancelar</span>
          </button>
        </nav>
      </header>
      <MeetupDetails>
        <img
          src="https://camunda.com/img/events/meetup-example.jpg"
          alt="imagem meetup"
        />
        <p>{meetupData.description}</p>
        <div>
          <div>
            <MdEvent color="#fff" />
            <p> {meetupData.date}</p>
          </div>

          <div>
            <MdPlace color="#fff" />
            <p> {meetupData.locale}</p>
          </div>
        </div>
      </MeetupDetails>
    </Container>
  );
}
