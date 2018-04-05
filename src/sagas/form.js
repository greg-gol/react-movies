import {put, select, takeEvery } from 'redux-saga/effects';

import {storeInputChange} from '../actions/form';
import {ActionTypes} from '../common/constants';


const getForm = state => state.form;

export function* processFormChange(action) {
  try {
    const form = yield select(getForm);
    const updatedInput = {...form[action.payload.key]};
    updatedInput.touched = true;
    updatedInput.value = action.payload.value;

    const data = {
      key: action.payload.key,
      value: updatedInput
    };

    yield put(storeInputChange(data));
  } catch (error) {
    console.error(error);
  }
}

export function* watchForm() {
  yield takeEvery(ActionTypes.PROCESS_INPUT_CHANGE, processFormChange);
}