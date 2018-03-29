import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { goTo } from '../actions/navigation';

import CustomButton from './common/customButton/customButton';


class MovieItem extends Component {

    render() {
        const { movieData } = this.props;

        return (
            <tr className="moviesList__movieItem">
                <td>
                    <CustomButton options={{
                        label: 'Show details',
                        action: this.props.goTo,
                        actionParameters: {
                            historyPush: this.props.history.push,
                            path: `/movie-details/${movieData.imdbID}`
                        }
                    }} />
                </td>
                <td>{ movieData.Title }</td>
                <td>{ movieData.Year }</td>
            </tr>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        goTo
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(MovieItem);