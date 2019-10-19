import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Banner,
  Content,
  Title,
  Info,
  ButtonSubscribe,
  ButtonText,
  InfoText,
  ContainerInfo,
} from './styles';
import cover from '~/assets/cover.png';

export default function Meetup({data, register, dashboard, cancel}) {
  return (
    <Container>
      <Banner
        source={{
          uri: data.banner ? data.banner.url : cover,
        }}
      />
      <Content>
        <Title>{data.title}</Title>

        <ContainerInfo>
          <Info>
            <Icon name="event" size={14} color="#f94d6a" />
            <InfoText>{data.datePtBR}</InfoText>
          </Info>
          <Info>
            <Icon name="place" size={14} color="#f94d6a" />
            <InfoText>{data.locale}</InfoText>
          </Info>
          <Info>
            <Icon name="person" size={14} color="#f94d6a" />
            <InfoText>Organizador: {data.user.name}</InfoText>
          </Info>
        </ContainerInfo>
        <ButtonSubscribe onPress={dashboard ? register : cancel}>
          <ButtonText>
            {dashboard ? 'Realizar inscrição' : 'Cancelar incrição'}
          </ButtonText>
        </ButtonSubscribe>
      </Content>
    </Container>
  );
}
