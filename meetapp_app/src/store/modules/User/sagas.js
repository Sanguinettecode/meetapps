import {all, put, call, takeLatest} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '~/services/api';
import {updateUserSuccess, updateUserFailure} from './actions';

export function* updateUser({payload}) {
  try {
    const {name, email, ...rest} = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldpassword ? rest : {}),
    };

    const response = yield call(api.put, '/users', profile);

    yield put(updateUserSuccess(response.data));
  } catch (err) {
    yield put(updateUserFailure());
  }
}

export default all([takeLatest('@user/UPDATE_USER_REQUEST', updateUser)]);
