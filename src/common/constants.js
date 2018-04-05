import keyMirror from 'keymirror';

const ActionTypes = keyMirror({
  ADD_MOVIE_TO_STORE: null,
  GET_STORED_MOVIES: null,
  FETCH_MOVIES: null,
  FETCH_MOVIE_DETAILS: null,
  FETCH_WIKI_DATA: null,
  POPULATE_STORED_MOVIES: null,
  POPULATE_MOVIES: null,
  POPULATE_MOVIE_DETAILS: null,
  POPULATE_WIKI_DATA: null,
  GO_BACK: null,
  GO_TO: null,
  PROCESS_INPUT_CHANGE: null,
  RESET_FORM: null,
  STORE_INPUT_CHANGE: null
});

const API_PARAMS = {
  SEARCH: 's',
  ID: 'i',
  MOVIE_DETAILS: {
    TITLE: 'Title',
    YEAR: 'Year',
    PRODUCTION: 'Production',
    ID: 'imdbID',
    RELEASED: 'Released',
    RUNTIME: 'Runtime',
    COUNTRY: 'Country',
    POSTER: 'Poster',
    LANGUAGE: 'Language',
    DIRECTOR: 'Director',
    WRITER: 'Writer',
    ACTORS: 'Actors',
    PLOT: 'Plot',
    GENRE: 'Genre',
    RATED: 'Rated',
    IMBD_RATING: 'imdbRating',
    IMDB_VOTES: 'imdbVotes',
    RATINGS: 'Ratings',
    METASCORE: 'Metascore',
    AWARDS: 'Awards',
    BOX_OFFICE: 'BoxOffice',
    DVD: 'DVD',
    WEBSITE: 'Website'
  }
};

const WIKI_API_PARAMS = {
  SEARCH: 'search'
};

export { ActionTypes, API_PARAMS, WIKI_API_PARAMS };