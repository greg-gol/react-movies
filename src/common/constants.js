import keyMirror from 'keymirror';

const ActionTypes = keyMirror({
  FETCH_MOVIES: null,
  FETCH_MOVIE_BY_ID: null,
  POPULATE_MOVIES: null,
  POPULATE_MOVIE_BY_ID: null,
  GO_BACK: null
});

const API_PARAMS = {
  SEARCH: 's',
  ID: 'i'
};

export { ActionTypes, API_PARAMS };