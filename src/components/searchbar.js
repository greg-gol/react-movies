import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMovies } from '../actions/movies';


class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            s: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.dataset.queryName]: e.target.value
        });
    }

    handleSubmit(e) {
        this.props.fetchMovies(this.state);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Nazwa filmu:</label>
                <input
                    name="movieTitle"
                    type="text"
                    data-query-name="s"
                    onChange={this.handleChange} />
                <input type="submit" value="Seach"/>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchMovies
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Searchbar);