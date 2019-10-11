import React from 'react';
import { Link } from 'react-router-dom';

import { Container, MeetupItem } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <strong>Meus Meetups</strong>
        <Link to="/meetup">Novo meetup</Link>
      </header>
      <ul>
        <MeetupItem to="/details">
          <strong>Meetup React js Recife</strong>
          <p>25 de outubro de 2019</p>
        </MeetupItem>
        <MeetupItem to="/details">
          <strong>Meetup React js Recife</strong>
          <p>25 de outubro de 2019</p>
        </MeetupItem>
        <MeetupItem to="/details">
          <strong>Meetup React js Recife</strong>
          <p>25 de outubro de 2019</p>
        </MeetupItem>
      </ul>
    </Container>
  );
}
