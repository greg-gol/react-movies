import React, { Component } from 'react';

import Searchbar from '../components/searchbar';
import Movieslist from '../components/moviesList';


export default class SearchView extends Component {
    render() {
        return (
            <div>
                <Searchbar/>
                <Movieslist/>
            </div>
        );
    }
}