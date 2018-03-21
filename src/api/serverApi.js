import fetcher from './fetcher';
import {URI_ROOT} from './urls';

export default {
  getMovies(options) { 
    const url = fetcher.buildUrl(URI_ROOT, options);
    console.log('url', url, options);
    return fetcher.get(url); //requires refactor so parameter is passed via UI
  }
}