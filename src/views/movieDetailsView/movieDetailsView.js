import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CustomButton from '../../components/common/customButton/customButton'
import CustomBadges from '../../components/common/customBadges/customBadges'

import { fetchMovieById } from '../../actions/movieById';
import { goBack } from '../../actions/navigation';

import { generateId } from '../../common/helpers';
import { API_PARAMS } from '../../common/constants'

import './movieDetailsView.scss';


class MoviesDetailsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPlot: false
        };
    }

    getMovieById() {
        const urlParamId = this.props.match.params.id;
        const { selectedMovie } = this.props.movieById;

        if (!selectedMovie
            || (selectedMovie.imdbID !== urlParamId)) {
            const options = {
                [API_PARAMS.ID]: urlParamId
            }
            this.props.fetchMovieById(options);
        }
    }

    togglePlot = () => {
        this.setState(( (prevState) => {
            return {
                showPlot: !prevState.showPlot
            }
        }));
    }

    shouldRenderPlot(selectedMovie) {
        if (this.state.showPlot) {
            return (
                <div>
                    <h6><strong>Plot:</strong></h6>
                    <p>
                        {selectedMovie.Plot}
                    </p>
                    <p className="btn btn-primary d-inline-block" onClick={this.togglePlot}>
                        Hide plot
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <h6><strong>Plot:</strong></h6>
                    <p>
                        { selectedMovie.Plot.substr(0, 20) }...
                    </p>
                    <p className="btn btn-success d-inline-block" onClick={this.togglePlot}>
                        Show plot
                    </p>
                </div>
            );            
        }

    }

    componentWillMount() {
        this.getMovieById();
    }

    render() {
        if (this.props.movieById.selectedMovie) {
            const { selectedMovie } = this.props.movieById;

            return (
                <section className="moviesDetailsView">
                    <div className="container">
                        <div className="row">
                            <div className="moviesDetailsView__header col-12">
                                <CustomButton options={{
                                    label: 'go back',
                                    action: { 
                                        actionMethod: this.props.goBack,
                                        param: this.props.history.goBack
                                    }
                                }} />
                                <div className="row">
                                    <div className="moviesDetailsView__header-info col-md-9 mb-3">
                                        <h3 className="moviesDetailsView__header-title d-inline-block mr-3">{selectedMovie.Title}</h3>
                                        <span>({selectedMovie.Year})</span>
                                        <p>
                                            {
                                                selectedMovie.Rated
                                            } | {
                                                selectedMovie.Runtime
                                            } | {
                                                selectedMovie.Genre.split(',').map( (genre) => {
                                                    return (
                                                        <CustomBadges 
                                                            options={{
                                                                label: genre,
                                                                action: () => {}
                                                            }} 
                                                            key={ generateId() }/>
                                                    )
                                                })
                                            } | {
                                                selectedMovie.Released
                                            } | {
                                                selectedMovie.Country
                                            } | {
                                                selectedMovie.Production
                                            }
                                        </p>
                                    </div>
                                    <div className="moviesDetailsView__header-ratings col-md-3">
                                        <div>imdb Rating: {selectedMovie.imdbRating} <span className="fa fa-star checked"></span></div>
                                        <div>Votes: {selectedMovie.imdbVotes}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-12">
                                <div className="moviesDetailsView__description row">
                                    <div className="oviesDetailsView__description-image col-md-4">
                                        <img src={selectedMovie.Poster} className="img-fluid" alt="poster"/>
                                    </div>
                                    <div className="moviesDetailsView__description col-md-8 d-flex flex-column align-items-start">
                                        <div className="moviesDetailsView__description-plot">
                                            { this.shouldRenderPlot(selectedMovie) }
                                        </div>
                                        <div className="moviesDetailsView__description-cast mb-4">
                                            <div>
                                                <h6 className="d-inline-block"><strong>Director:</strong></h6> {selectedMovie.Director}
                                            </div>
                                            <div>
                                                <h6 className="d-inline-block"><strong>Writer:</strong></h6> {selectedMovie.Writer}
                                            </div>
                                            <div>
                                                <h6 className="d-inline-block"><strong>Language:</strong></h6> {selectedMovie.Language}
                                            </div>
                                            <div>
                                                <h6 className="d-inline-block"><strong>Actors: </strong></h6>
                                                {
                                                    selectedMovie.Actors.split(',').map( (actor) => {
                                                        return (
                                                            <CustomBadges 
                                                                options={{
                                                                    label: actor,
                                                                    action: () => {}
                                                                    }} 
                                                                key={ generateId() }/>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="moviesDetailsView__description-ratings mt-auto">
                                            <div>
                                                <h6><strong>Ratings:</strong></h6>
                                                <ul>
                                                    <li>Metascore: {selectedMovie.Metascore}</li>
                                                    {
                                                        selectedMovie.Ratings.map( (source) => {
                                                            return (                                                            
                                                                <li key={ generateId() } >
                                                                    {source.Source}: {source.Value} 
                                                                </li>                                                           
                                                            );
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="moviesDetailsView__misc">
                                    <p>
                                        <strong>Awards: </strong> {selectedMovie.Awards}> |
                                        <strong>Box office: </strong> {selectedMovie.BoxOffice} | 
                                        <strong>On DVD: </strong> {selectedMovie.DVD} | 
                                        <strong>Website: </strong>
                                        <CustomButton options={{
                                            label: selectedMovie.Website,
                                            url: selectedMovie.Website,
                                            target: '_blank',
                                            className: 'link'
                                        }} />
                                    </p>                                           
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        } else {
            return null;
        }

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchMovieById,
        goBack
    }, dispatch)
}


function mapStateToProps(state) {
    const { movieById } = state;

    return {
        movieById
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesDetailsView);