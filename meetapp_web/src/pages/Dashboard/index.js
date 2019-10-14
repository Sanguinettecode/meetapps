import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { useDispatch } from 'react-redux';
import { Container, MeetupItem } from './styles';
import api from '../../services/api';
import {
  addMeetupRequest,
  addNewMeetup,
} from '../../store/modules/Meetup/actions';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('/meetup');
      const data = response.data.map(meetup => {
        const formatedDate = format(
          parseISO(meetup.date),
          "dd 'de' MMMM 'de' yyyy",
          {
            locale: pt,
          }
        );
        return {
          ...meetup,
          formatedDate,
        };
      });
      setMeetups(data);
    }
    loadMeetups();
  }, []);
  function handleGetMeetup(id) {
    dispatch(addMeetupRequest(id));
  }
  return (
    <Container>
      <header>
        <strong>Meus Meetups</strong>
        <button type="button" onClick={() => dispatch(addNewMeetup())}>
          Novo meetup
        </button>
      </header>
      <ul>
        {meetups.map(meetup => (
          <MeetupItem
            type="button"
            key={meetup.id}
            onClick={() => handleGetMeetup(meetup.id)}
          >
            <strong>{meetup.title}</strong>
            <p>{meetup.formatedDate}</p>
          </MeetupItem>
        ))}
      </ul>
    </Container>
  );
}
