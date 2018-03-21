import keyMirror from 'keymirror';

const ActionTypes = keyMirror({
  FETCH_MOVIES: null,
  POPULATE_MOVIES: null,
});

const API_PARAMS = {
  search: "s"
};

export { ActionTypes, API_PARAMS };