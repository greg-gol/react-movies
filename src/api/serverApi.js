import fetcher from './fetcher';
import {URI_ROOT} from './urls';

export default {
  getMovies() {
    return fetcher.get(`${URI_ROOT}&s=star`); //requires refactor so parameter is passed via UI
  }
}