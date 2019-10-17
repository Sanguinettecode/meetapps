import {all} from 'redux-saga/effects';
import Auth from './Auth/sagas';
import User from './User/sagas';

export default function* rootSaga() {
  return yield all([Auth, User]);
}
