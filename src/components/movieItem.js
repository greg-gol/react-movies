import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { goTo } from '../actions/navigation';
import {API_PARAMS} from '../common/constants';

import CustomButton from './common/customButton/customButton';

const {MOVIE_DETAILS} = API_PARAMS;


function MovieItem(props) {
    const { movieData } = props;

    return (
        <tr className="moviesList__movieItem">
            <td>
                <CustomButton options={{
                    label: 'Show details',
                    action: props.goTo,
                    actionParameters: {
                        historyPush: props.history.push,
                        path: `/movie-details/${movieData[MOVIE_DETAILS.ID]}`
                    }
                }} />
            </td>
            <td>{ movieData[MOVIE_DETAILS.TITLE] }</td>
            <td>{ movieData[MOVIE_DETAILS.YEAR] }</td>
        </tr>
    );
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        goTo
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(MovieItem);