import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { updateUserSuccess, updateUserFailure } from './actions';

export function* updateUser({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldpassword ? rest : {}),
    };

    const response = yield call(api.put, '/users', profile);

    toast.success('Dados do usuário atualizados');

    yield put(updateUserSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar, confira seus dados e tente novamente');
    yield put(updateUserFailure());
  }
}

export default all([takeLatest('@user/UPDATE_USER_REQUEST', updateUser)]);
