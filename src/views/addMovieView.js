import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addMovieToStore } from '../actions/storedMovies';
import { processInputChange, resetForm } from '../actions/form';

import countries from '../common/countries';
import { API_PARAMS } from '../common/constants'

const {MOVIE_DETAILS} = API_PARAMS;

class AddMovieView extends Component {

    handleChange = (e) => {
        let value = e.target.value;
        const key = e.target.name;

        if (e.target.hasAttribute('multiple')) {
            value = Array.from(e.target.selectedOptions).map(item => item.value).join(", ");
        }

        this.props.processInputChange({
            key,
            value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMovieToStore(this.props.form);
        this.props.resetForm();
    }

    componentDidMount() {
        this.props.resetForm();
    }

    render() {
        const {form} = this.props;
        return (
            <section className="addMovieView">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="movieTitleInput">Title</label>
                                    <input type="text" className="form-control" name={MOVIE_DETAILS.TITLE} placeholder="Enter movie title" value={form[MOVIE_DETAILS.TITLE].value} onChange={this.handleChange} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="movieTitleInput">imdb ID</label>
                                    <input type="text" className="form-control" name={MOVIE_DETAILS.ID} value={form[MOVIE_DETAILS.ID].value} onChange={this.handleChange} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="movieProductionYearInput">Year of production</label>
                                    <input type="number" className="form-control" name={MOVIE_DETAILS.TITLE} value={form[MOVIE_DETAILS.YEAR].value} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="movieProductionYearInput">Release date</label>
                                    <input type="date" className="form-control" name={MOVIE_DETAILS.RELEASED} value={form[MOVIE_DETAILS.RELEASED].value} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="movieLengthInput">Length</label>
                                    <input type="number" className="form-control" name={[MOVIE_DETAILS.RUNTIME]} min="60" max="300" value={form[MOVIE_DETAILS.RUNTIME].value} onChange={this.handleChange}/>
                                    <small>Pick movie length in minutes</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="movieCountryInput">Select country of the movie</label>
                                    <select className="form-control" name={MOVIE_DETAILS.COUNTRY} onChange={this.handleChange} multiple>
                                        {countries.map(country => <option value={country.name} key={country.code}>{country.name}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="movieLanguageInput">Select language of the movie</label>
                                    <select className="form-control" name={MOVIE_DETAILS.LANGUAGE} onChange={this.handleChange}>
                                        {countries.map(country => <option value={country.name} key={country.code}>{country.name}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="moviePlotInput">Plot</label>
                                    <textarea className="form-control" name={MOVIE_DETAILS.PLOT} placeholder="Enter short plot of the movie" value={form[MOVIE_DETAILS.PLOT].value} onChange={this.handleChange}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Add movie</button>
                            </form>                       
                        </div>
                    </div>   
                </div>
            </section>
        );
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addMovieToStore,
        processInputChange,
        resetForm
    }, dispatch)
}


function mapStateToProps(state) {
    const { storedMovies, form } = state;

    return {
        storedMovies,
        form
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMovieView);