import {all, put, call, takeLatest} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '~/services/api';
import {authSuccess, authFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {email, password} = payload;
    const response = yield call(api.post, '/session', {email, password});
    const {token, user} = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(authSuccess(token, user));
  } catch (error) {
    Alert.alert('Falha na autenticação, verifique seus dados');
    yield put(authFailure());
  }
}
export function* signUp({payload}) {
  try {
    const {name, email, password} = payload;
    yield call(api.post, '/users', {name, email, password});
    Alert.alert('Cadastro realizado com sucesso!');
  } catch (error) {
    yield put(authFailure());
    Alert.alert('Falha no cadastro, verifique seus dados');
  }
}
export function setToken({payload}) {
  if (!payload) {
    return;
  }
  const {token} = payload.Auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
export function signOut() {}
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGNIN_REQUEST', signIn),
  takeLatest('@auth/SIGNOUT', signOut),
  takeLatest('@auth/SIGNUP_REQUEST', signUp),
]);
