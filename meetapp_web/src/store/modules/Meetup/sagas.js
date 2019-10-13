import { all, call, put, takeLatest } from 'redux-saga/effects';
import history from '../../../services/history';
import api from '../../../services/api';
import { addMeetupSuccess } from './actions';

export function* addMeetup({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.get, `/meetup/${id}`);

    yield put(addMeetupSuccess(response.data[0]));
    history.push('/details');
  } catch (error) {
    console.log('erro ao buscar meetup', error);
  }
}
export function* deleteMeetup({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.delete, `/meetup/${id}`);
    console.tron.log(response.data);
    history.push('/dashboard');
  } catch (error) {
    console.log('erro ao buscar meetup', error);
  }
}

export default all([
  takeLatest('@meetup/ADD_REQUEST', addMeetup),
  takeLatest('@meetup/DELETE_REQUEST', deleteMeetup),
]);
