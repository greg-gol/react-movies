import fetcher from './fetcher';
import {URI_ROOT} from './urls';

export default {
  getMovies(options) { 
    const url = fetcher.buildUrl(URI_ROOT, options);
    return fetcher.get(url);
  }
}