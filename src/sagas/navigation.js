import {takeLatest } from 'redux-saga/effects';

import {ActionTypes} from '../common/constants';

export function* goBack(action) {
  try {
    yield action.payload();
  } catch (error) {
    console.error(error);
  }
}

export function* watchGoBack() {
  yield takeLatest(ActionTypes.GO_BACK, goBack);
}