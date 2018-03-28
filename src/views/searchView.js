import React, { Component } from 'react';

import SearchBar from '../components/searchBar';
import Movieslist from '../components/moviesList/moviesList';


export default class SearchView extends Component {
    render() {
        return (
            <section className="searchView">
                <div className="container">
                    <SearchBar/>
                    <Movieslist history={this.props.history} />               
                </div>
            </section>
        );
    }
}