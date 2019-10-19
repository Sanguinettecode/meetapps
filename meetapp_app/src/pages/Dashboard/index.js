/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useMemo} from 'react';
import {format, addDays, subDays, parseISO} from 'date-fns';
import {withNavigationFocus} from 'react-navigation';
import {Alert} from 'react-native';
import pt from 'date-fns/locale/pt-BR';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import {Container, List, DateNav, ButtonNav, DateText} from './styles';
import Header from '~/components/Header';
import DayFree from '~/components/DayFree';
import api from '~/services/api';
import Meetup from '~/components/Meetup';

function Dashboard({isFocused}) {
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);

  const dateFormated = useMemo(
    () =>
      format(date, "dd 'de' MMMM", {
        locale: pt,
      }),
    [date],
  );

  async function loadMeetups() {
    const response = await api.get('/meetups', {
      params: {date},
    });
    const data = response.data.map(meetup => ({
      ...meetup,
      datePtBR: format(parseISO(meetup.date), "dd 'de' MMMM 'de' yyyy", {
        locale: pt,
      }),
    }));
    setMeetups(data);
  }

  useEffect(() => {
    if (isFocused) {
      loadMeetups();
    }
  }, [isFocused, date]);

  function handlerPrevDay() {
    setDate(subDays(date, 1));
  }
  function handlerNextDay() {
    setDate(addDays(date, 1));
  }

  async function handlerSubscribe(id) {
    try {
      await api.post('/registration', {meetupId: id});
      Alert.alert('Inscrição realizada com sucesso!');
    } catch (error) {
      Alert.alert(error.response.data.error);
    }
  }
  return (
    <Background>
      <Header />
      <Container>
        <DateNav>
          <ButtonNav onPress={handlerPrevDay}>
            <Icon name="chevron-left" size={30} color="#fff" />
          </ButtonNav>
          <DateText>{dateFormated}</DateText>
          <ButtonNav onPress={handlerNextDay}>
            <Icon name="keyboard-arrow-right" size={30} color="#fff" />
          </ButtonNav>
        </DateNav>
        {meetups.length ? (
          <List
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <Meetup
                data={item}
                register={() => handlerSubscribe(item.id)}
                dashboard
              />
            )}
          />
        ) : (
          <DayFree />
        )}
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetaps',
  tabBarIcon: ({tintColor}) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
