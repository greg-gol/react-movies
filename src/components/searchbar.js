import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMovies } from '../actions/movies';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        this.props.fetchMovies(this.state);
        e.preventDefault();
    }

    render() {
        return (
            <div className="searchbar-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <label>Enter movie title:</label>
                    <input
                        name="search"
                        type="text"
                        onChange={this.handleChange} />
                    <input type="submit" value="Seach"/>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchMovies
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);