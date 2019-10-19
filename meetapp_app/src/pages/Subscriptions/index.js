import React, {useState, useEffect} from 'react';
import {format, parseISO} from 'date-fns';
import {withNavigationFocus} from 'react-navigation';
import {Alert} from 'react-native';
import pt from 'date-fns/locale/pt-BR';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import {Container, List} from './styles';
import Header from '~/components/Header';
import DayFree from '~/components/DayFree';
import api from '~/services/api';
import Meetup from '~/components/Meetup';

function Subscriptions({isFocused}) {
  const [subscriptions, setSubscription] = useState([]);

  async function loadSubscriptions() {
    const response = await api.get('/registration');
    const data = response.data.map(meetup => ({
      ...meetup,
      datePtBR: format(parseISO(meetup.meetup.date), "dd 'de' MMMM 'de' yyyy", {
        locale: pt,
      }),
    }));

    setSubscription(data);
  }

  useEffect(() => {
    if (isFocused) {
      loadSubscriptions();
    }
  }, [isFocused]);

  function handlerCancel(id) {
    Alert.alert(`meetup ${id} cancelado`);
  }
  return (
    <Background>
      <Header />
      <Container>
        {subscriptions.length ? (
          <List
            data={subscriptions}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <Meetup
                data={item.meetup}
                cancel={() => handlerCancel(item.meetup.id)}
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

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({tintColor}) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscriptions);
