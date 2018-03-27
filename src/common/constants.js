import keyMirror from 'keymirror';

const ActionTypes = keyMirror({
  FETCH_MOVIES: null,
  FETCH_MOVIE_BY_ID: null,
  FETCH_WIKI_DATA: null,
  POPULATE_MOVIES: null,
  POPULATE_MOVIE_BY_ID: null,
  POPULATE_WIKI_DATA: null,
  GO_BACK: null
});

const API_PARAMS = {
  SEARCH: 's',
  ID: 'i'
};

const WIKI_API_PARAMS = {
  SEARCH: 'search'
};

export { ActionTypes, API_PARAMS, WIKI_API_PARAMS };