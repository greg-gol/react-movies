import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CustomButton from '../../components/common/customButton/customButton'
import WikiBadge from '../../components/common/wikiBadge/wikiBadge'

import { fetchMovieDetails } from '../../actions/movieDetails';
import { goBack } from '../../actions/navigation';

import { API_PARAMS } from '../../common/constants'

import './movieDetailsView.scss';

const {MOVIE_DETAILS} = API_PARAMS;

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

    renderMovieDetailsHeader(movieDetails) {
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
                            <h3 className="movieDetailsView__title d-inline-block mr-3">{movieDetails[MOVIE_DETAILS.TITLE] || 'N/A'}</h3>
                            <span>({movieDetails[MOVIE_DETAILS.YEAR]})</span>
                            <div>
                                {
                                    movieDetails[MOVIE_DETAILS.RATED] || 'N/A'
                                } | {
                                    movieDetails[MOVIE_DETAILS.RUNTIME] || 'N/A'
                                } | {
                                    this.renderFromArray(movieDetails[MOVIE_DETAILS.GENRE], 'genre')
                                } | {
                                    movieDetails[MOVIE_DETAILS.RELEASED] || 'N/A'
                                } | {
                                    movieDetails[MOVIE_DETAILS.COUNTRY] || 'N/A'
                                } | {
                                    movieDetails[MOVIE_DETAILS.PRODUCTION] || 'N/A'
                                }
                            </div>
                        </div>
                        <div className="movieDetailsView__ratings col-md-3">
                            <div>imdb Rating: {movieDetails[MOVIE_DETAILS.IMDB_RATING] || 'N/A'} <span className="fa fa-star checked"></span></div>
                            <div>Votes: {movieDetails[MOVIE_DETAILS.IMDB_VOTES] || 'N/A'}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderMovieDetailsDescription(movieDetails) {
        let poster;

        if (movieDetails[MOVIE_DETAILS.POSTER]) {
            poster = <img src={movieDetails[MOVIE_DETAILS.POSTER]} className="img-fluid" alt="poster"/>
        } else {
            poster = (<a href="https://placeholder.com"><img src="http://via.placeholder.com/200x350" alt="placeholder"/></a>);
        }

        return(
            <div className="movieDetailsView__description row mb-4">
                <div className="col-12">
                    <div className="row">
                        <div className="movieDetailsView__poster col-md-4">
                            {poster}
                        </div>
                        <div className="col-md-8 d-flex flex-column align-items-start">
                            <div className="moviesDetailsView__plot">
                                {this.renderPlot(movieDetails)}
                            </div>
                            <div className="movieDetailsView__cast mb-4">
                                <div>
                                    <h6 className="d-inline-block"><strong>Director:</strong></h6> {movieDetails[MOVIE_DETAILS.DIRECTOR] || 'N/A'}
                                </div>
                                <div>
                                    <h6 className="d-inline-block"><strong>Writer:</strong></h6> {movieDetails[MOVIE_DETAILS.WRITER] || 'N/A'}
                                </div>
                                <div>
                                    <h6 className="d-inline-block"><strong>Language:</strong></h6> {movieDetails[MOVIE_DETAILS.LANGUAGE] || 'N/A'}
                                </div>
                                <div>
                                    <h6 className="d-inline-block"><strong>Actors: </strong></h6>
                                    {this.renderFromArray(movieDetails[MOVIE_DETAILS.ACTORS])}
                                </div>
                            </div>
                            <div className="movieDetailsView__ratings mt-auto">
                                <h6><strong>Ratings:</strong></h6>
                                <ul>
                                    <li>Metascore: {movieDetails[MOVIE_DETAILS.METASCORE] || 'N/A'}</li>
                                    {this.renderFromArray(movieDetails[MOVIE_DETAILS.RATINGS], 'list')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        );
    }

    renderMovieDetailsFooter(movieDetails) {
        return(
            <div className="movieDetailsView__misc row">
                <div className="col-12">
                    <p>
                        <strong>Awards: </strong> {movieDetails[MOVIE_DETAILS.AWARDS] || 'N/A'} |
                        <strong>Box office: </strong> {movieDetails[MOVIE_DETAILS.BOX_OFFICE] || 'N/A'} | 
                        <strong>On DVD: </strong> {movieDetails[MOVIE_DETAILS.DVD] || 'N/A'} | 
                        <strong>Website: </strong> <a href={movieDetails[MOVIE_DETAILS.WEBSITE]} className="link" rel="nofollow" target="_blank">{movieDetails.Website}</a>
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
                    {this.state.isPlotVisible ? movieDetails[MOVIE_DETAILS.PLOT] : movieDetails[MOVIE_DETAILS.PLOT].substr(0, 20)}
                </p>
                <p className="btn btn-primary d-inline-block" onClick={this.togglePlot}>
                    {this.state.isPlotVisible ? 'Hide plot' : 'Show Plot'}
                </p>
            </div>
        );
    }

    renderFromArray = (data, type = null) => {
        if (!Array.isArray(data)) {
            return 'N/A';
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
                    {this.renderMovieDetailsHeader(movieDetails)}
                    {this.renderMovieDetailsDescription(movieDetails)}
                    {this.renderMovieDetailsFooter(movieDetails)}
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
    const { movieDetails, storedMovies } = state;

    return {
        movieDetails,
        storedMovies
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesDetailsView);