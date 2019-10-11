import React from 'react';
import { MdEvent, MdPlace, MdEdit, MdDeleteForever } from 'react-icons/md';
import { Container, MeetupDetails, Action } from './styles';

export default function Details() {
  return (
    <Container>
      <header>
        <strong>Título do Meetup</strong>
        <nav>
          <Action to="/meetup" edit>
            <MdEdit />
            <span>Editar</span>
          </Action>
          <Action to="/meetup">
            <MdDeleteForever />
            <span>Cancelar</span>
          </Action>
        </nav>
      </header>
      <MeetupDetails>
        <img
          src="https://camunda.com/img/events/meetup-example.jpg"
          alt="imagem meetup"
        />
        <p>
          Description Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Beatae, eaque sunt. Saepe quidem voluptatum sunt maxime laboriosam
          modi minus, nam quia ad. Modi nam voluptates fugit maxime facere
          dolorem at quia dolores repellat nihil expedita nostrum sint molestias
          consequuntur, quo, nisi minus, culpa veniam laborum neque temporibus.
          Eum, dolore alias.
        </p>
        <div>
          <div>
            <MdEvent color="#fff" />
            <p> Data</p>
          </div>

          <div>
            <MdPlace color="#fff" />
            <p> Local</p>
          </div>
        </div>
      </MeetupDetails>
    </Container>
  );
}
