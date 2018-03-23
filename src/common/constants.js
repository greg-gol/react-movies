import keyMirror from 'keymirror';

const ActionTypes = keyMirror({
  FETCH_MOVIES: null,
  POPULATE_MOVIES: null,
});

const API_PARAMS = {
  SEARCH: "s"
};

export { ActionTypes, API_PARAMS };