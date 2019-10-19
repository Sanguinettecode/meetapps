import React from 'react';
import logo from '~/assets/logo.png';
import {Container, ImageHeader} from './styles';

export default function Header() {
  return (
    <Container>
      <ImageHeader source={logo} />
    </Container>
  );
}
