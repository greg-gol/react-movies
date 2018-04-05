import {put, select, takeEvery } from 'redux-saga/effects';

import {storeInputChange, cleanForm} from '../actions/form';
import {ActionTypes} from '../common/constants';


const getForm = state => state.form;

export function* processFormChange(action) {
  try {
    const form = yield select(getForm);
    const updatedInput = {...form[action.payload.key]};
    updatedInput.touched = true;
    updatedInput.value = action.payload.value;
    console.log('updatedInput: ', updatedInput);
    const data = {
      key: action.payload.key,
      value: updatedInput
    };

    yield put(storeInputChange(data));
  } catch (error) {
    console.error(error);
  }
}

export function* resetForm(action) {
  try {
    yield put(cleanForm());
  } catch (error) {
    console.error(error);
  }  
}

export function* watchForm() {
  yield takeEvery(ActionTypes.PROCESS_INPUT_CHANGE, processFormChange);
  yield takeEvery(ActionTypes.RESET_FORM, resetForm);
}