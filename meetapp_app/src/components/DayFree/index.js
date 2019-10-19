import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Content, TextContent} from './styles';

export default function DayFree() {
  return (
    <Container>
      <Content>
        <Icon name="date-range" size={35} color="rgba(255,255,255,0.3)" />
        <TextContent>Nenhum evento hoje</TextContent>
      </Content>
    </Container>
  );
}
