import React, { Component } from 'react';

import SearchBar from '../components/searchBar';
import Movieslist from '../components/moviesList';


export default class SearchView extends Component {
    render() {
        return (
            <div className="searchview-container">
                <SearchBar/>
                <Movieslist/>
            </div>
        );
    }
}