import React from 'react';

import SearchBar from '../components/searchBar';
import Movieslist from '../components/moviesList/moviesList';


export default function SearchView(props) {
    return (
        <section className="searchView">
            <div className="container">
                <SearchBar/>
                <Movieslist history={props.history} />               
            </div>
        </section>
    );
}