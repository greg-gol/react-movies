import React, { Component } from 'react';

import SearchBar from '../components/searchBar';
import Movieslist from '../components/moviesList/moviesList';


export default class SearchView extends Component {
    render() {
        return (
            <div className="searchView">
                <SearchBar/>
                <Movieslist/>
            </div>
        );
    }
}