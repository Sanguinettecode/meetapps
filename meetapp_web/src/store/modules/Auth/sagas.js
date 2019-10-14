import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { authSuccess, authFailure } from './actions';
import history from '../../../services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, '/session', { email, password });
    const { token, user } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(authSuccess(token, user));
    history.push('/dashboard');
  } catch (error) {
    toast.error('Erro ao logar, confira seus dados e tente novamente');
    yield put(authFailure());
  }
}
export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, '/users', { name, email, password });
    history.push('/');
  } catch (error) {
    toast.error('Erro ao cadastrar, confira seus dados e tente novamente');
    yield put(authFailure());
  }
}
export function setToken({ payload }) {
  if (!payload) {
    return;
  }
  const { token } = payload.Auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
export function signOut() {
  history.push('/');
}
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGNIN_REQUEST', signIn),
  takeLatest('@auth/SIGNOUT', signOut),
  takeLatest('@auth/SIGNUP_REQUEST', signUp),
]);
