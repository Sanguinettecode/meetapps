import React, { useState, useEffect } from 'react';
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
      setMeetups(response.data);
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
            <p>{meetup.date}</p>
          </MeetupItem>
        ))}
      </ul>
    </Container>
  );
}
