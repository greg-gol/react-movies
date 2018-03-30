import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { goTo } from '../actions/navigation';

import CustomButton from './common/customButton/customButton';


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
                        path: `/movie-details/${movieData.imdbID}`
                    }
                }} />
            </td>
            <td>{ movieData.Title }</td>
            <td>{ movieData.Year }</td>
        </tr>
    );
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        goTo
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(MovieItem);