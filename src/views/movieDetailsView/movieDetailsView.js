import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CustomButton from '../../components/common/customButton/customButton'
import WikiBadge from '../../components/common/wikiBadge/wikiBadge'

import { fetchMovieDetails } from '../../actions/movieDetails';
import { goBack } from '../../actions/navigation';

import { API_PARAMS } from '../../common/constants'

import './movieDetailsView.scss';


class MoviesDetailsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlotVisible: false
        };
    }

    getMovieDetails() {
        const urlParamId = this.props.match.params.id;
        const { movieDetails } = this.props;

        if (!movieDetails || (movieDetails.imdbID !== urlParamId)) {
            const options = {
                [API_PARAMS.ID]: urlParamId
            }
            this.props.fetchMovieDetails(options);
        }
    }

    renderMovieHeader(movieDetails) {
        return(
            <div className="movieDetailsView__header row">
                <div className="col-12">
                    <CustomButton options={{
                        label: 'go back',
                        action: this.props.goBack,
                        actionParameters: this.props.history.goBack
                    }} />
                    <div className="row">
                        <div className="movieDetailsView__info col-md-9 mb-3">
                            <h3 className="movieDetailsView__title d-inline-block mr-3">{movieDetails.Title}</h3>
                            <span>({movieDetails.Year})</span>
                            <div>
                                {
                                    movieDetails.Rated
                                } | {
                                    movieDetails.Runtime
                                } | {
                                    this.renderFromArray(movieDetails.Genre, 'genre')
                                } | {
                                    movieDetails.Released
                                } | {
                                    movieDetails.Country
                                } | {
                                    movieDetails.Production
                                }
                            </div>
                        </div>
                        <div className="movieDetailsView__ratings col-md-3">
                            <div>imdb Rating: {movieDetails.imdbRating} <span className="fa fa-star checked"></span></div>
                            <div>Votes: {movieDetails.imdbVotes}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderMovieDescription(movieDetails) {
        return(
            <div className="movieDetailsView__description row mb-4">
                <div className="col-12">
                    <div className="row">
                        <div className="movieDetailsView__poster col-md-4">
                            <img src={movieDetails.Poster} className="img-fluid" alt="poster"/>
                        </div>
                        <div className="col-md-8 d-flex flex-column align-items-start">
                            <div className="moviesDetailsView__plot">
                                {this.renderPlot(movieDetails)}
                            </div>
                            <div className="movieDetailsView__cast mb-4">
                                <div>
                                    <h6 className="d-inline-block"><strong>Director:</strong></h6> {movieDetails.Director}
                                </div>
                                <div>
                                    <h6 className="d-inline-block"><strong>Writer:</strong></h6> {movieDetails.Writer}
                                </div>
                                <div>
                                    <h6 className="d-inline-block"><strong>Language:</strong></h6> {movieDetails.Language}
                                </div>
                                <div>
                                    <h6 className="d-inline-block"><strong>Actors: </strong></h6>
                                    {this.renderFromArray(movieDetails.Actors)}
                                </div>
                            </div>
                            <div className="movieDetailsView__ratings mt-auto">
                                <h6><strong>Ratings:</strong></h6>
                                <ul>
                                    <li>Metascore: {movieDetails.Metascore}</li>
                                    {this.renderFromArray(movieDetails.Ratings, 'list')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        );
    }

    renderMovieMiscInformation(movieDetails) {
        return(
            <div className="movieDetailsView__misc row">
                <div className="col-12">
                    <p>
                        <strong>Awards: </strong> {movieDetails.Awards}> |
                        <strong>Box office: </strong> {movieDetails.BoxOffice} | 
                        <strong>On DVD: </strong> {movieDetails.DVD} | 
                        <strong>Website: </strong> <a href={movieDetails.Website} className="link" rel="nofollow" target="_blank">{movieDetails.Website}</a>
                    </p>                                           
                </div>
            </div>            
        );
    }

    togglePlot = () => {
        this.setState( (prevState) => {
            return {
                isPlotVisible: !prevState.isPlotVisible
            }
        });
    }

    renderPlot = (movieDetails) => {
        return (
            <div>
                <h6><strong>Plot:</strong></h6>
                <p>
                    {this.state.isPlotVisible ? movieDetails.Plot : movieDetails.Plot.substr(0, 20)}
                </p>
                <p className="btn btn-primary d-inline-block" onClick={this.togglePlot}>
                    {this.state.isPlotVisible ? 'Hide plot' : 'Show Plot'}
                </p>
            </div>
        );
    }

    renderFromArray = (data, type = null) => {
        if (!Array.isArray(data)) {
            return null;
        }

        return data.map(item => {
            if (type === 'list') {
                return (                                                            
                    <li key={`${item.Source}_key`} >
                        {item.Source}: {item.Value} 
                    </li>                                                           
                );
            }

            return (
                <WikiBadge
                    options={{
                        label: item,
                        query: (type === 'genre') ? `${item} film` : null
                    }}
                    key={`${item}_key`}/>
            );
        })
    }

    componentWillMount() {
        this.getMovieDetails();
    }

    render() {
        if(Object.keys(this.props.movieDetails).length === 0) {
            return null;
        }

        const {movieDetails} = this.props;

        return (
            <section className="movieDetailsView">
                <div className="container">
                    {this.renderMovieHeader(movieDetails)}
                    {this.renderMovieDescription(movieDetails)}
                    {this.renderMovieMiscInformation(movieDetails)}
                </div>
            </section>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchMovieDetails,
        goBack
    }, dispatch)
}


function mapStateToProps(state) {
    const { movieDetails } = state;

    return {
        movieDetails
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesDetailsView);