import {ActionTypes} from "../common/constants";

export const fetchWikiData = (options) => {
  return {
    type: ActionTypes.FETCH_WIKI_DATA,
    payload: options
  }
}

export const populateWikiData = (data) => {
  return {
    type: ActionTypes.POPULATE_WIKI_DATA,
    payload: data
  }
}