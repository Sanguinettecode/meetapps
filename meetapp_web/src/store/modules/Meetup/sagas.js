import { all, call, put, takeLatest } from 'redux-saga/effects';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api';
import { addMeetupSuccess, createMeetupSuccess } from './actions';

export function* addMeetup({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.get, `/meetup/${id}`);
    const data = {
      ...response.data[0],
      formatedDate: format(
        parseISO(response.data[0].date),
        "dd 'de' MMMM 'de' yyyy",
        { locale: pt }
      ),
    };
    yield put(addMeetupSuccess(data));
    history.push('/details');
  } catch (error) {
    toast.error('Erro ao buscar informações');
  }
}
export function* createMeetup({ payload }) {
  try {
    const { title, description, date, locale, banner_id } = payload.data;

    const response = yield call(api.post, '/meetup', {
      title,
      description,
      date,
      locale,
      banner_id,
    });
    yield put(createMeetupSuccess(response.data));
    history.push('/dashboard');
    toast.success('Meetuap criado com sucesso!');
  } catch (error) {
    toast.error(
      'Erro ao cadastrar meetup, verifique os dados e tente novamente'
    );
  }
}

export function* updateMeetup({ payload }) {
  try {
    const { id, title, description, date, locale, banner_id } = payload.data;

    yield call(api.put, `/meetup/${id}`, {
      title,
      description,
      date,
      locale,
      banner_id,
    });
    history.push('/dashboard');
    toast.success('Dados do meetup atualizados');
  } catch (error) {
    toast.error(
      'Erro ao atualizar dados, verifique os dados e tente novamente'
    );
  }
}

export function* deleteMeetup({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `/meetup/${id}`);

    history.push('/dashboard');
    toast.success('Meetup Cancelado com sucesso');
  } catch (error) {
    toast.error('Não é possível deletar este meetup');
  }
}

export default all([
  takeLatest('@meetup/ADD_REQUEST', addMeetup),
  takeLatest('@meetup/DELETE_REQUEST', deleteMeetup),
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
]);
