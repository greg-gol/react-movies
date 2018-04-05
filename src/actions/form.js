import {ActionTypes} from "../common/constants";

export const processInputChange = (data) => {
  return {
    type: ActionTypes.PROCESS_INPUT_CHANGE,
    payload: data
  }
}

export const storeInputChange = (data) => {
  return {
    type: ActionTypes.STORE_INPUT_CHANGE,
    payload: data
  }
}

export const resetForm = () => {
  return {
    type: ActionTypes.RESET_FORM
  }
}

export const cleanForm = () => {
  return {
    type: ActionTypes.CLEAN_FORM
  }
}