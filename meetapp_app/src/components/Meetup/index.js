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

export default function Meetup({data}) {
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
            <InfoText>{data.date}</InfoText>
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
        <ButtonSubscribe onPress={() => {}}>
          <ButtonText>Realizar inscrição</ButtonText>
        </ButtonSubscribe>
      </Content>
    </Container>
  );
}
