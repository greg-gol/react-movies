import {ActionTypes} from "../common/constants";

export const goBack = (options) => {
  return {
    type: ActionTypes.GO_BACK,
    payload: options
  }
}