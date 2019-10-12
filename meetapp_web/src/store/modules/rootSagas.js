import { all } from 'redux-saga/effects';
import Auth from './Auth/sagas';
import User from './User/sagas';
import Meetup from './Meetup/sagas';

export default function* rootSaga() {
  return yield all([Auth, User, Meetup]);
}
