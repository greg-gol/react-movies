import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ToolTip from '../toolTip/toolTip'

import { fetchWikiData } from '../../../actions/fetchWikiData';
import { WIKI_API_PARAMS } from '../../../common/constants'
import './customBadges.scss';

class CustomBadges extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showToolTip: false
        }
        this.searchQuery = '';
    }

    fetchData = () => {
        const { data } = this.props.wikiData;
        const { label, query } = this.props.options;
        this.searchQuery = query ? query : label;

        if (!data || label !== data[0]) {
            const xhrOptions = {
                [WIKI_API_PARAMS.SEARCH]: this.searchQuery
            }
            this.props.fetchWikiData(xhrOptions);
        }
        this.toggleToolTip();
    }

    toggleToolTip = () => {
        this.setState( prevState => {
            return {
                showToolTip: !prevState.showToolTip
            }
        } );
    }

    renderToolTip = (data) => {
        return (
            <ToolTip 
                text={data[2]}
                toggleToolTip={this.toggleToolTip} />
        );
    }

    render() {
        const { options } = this.props;
        const { data } = this.props.wikiData;

        return (
            <div className="customBadge">
                { this.state.showToolTip && data && data[0] === this.searchQuery ? this.renderToolTip(data) : null }
                <span 
                    className={options.className ? options.className : 'badge badge-pill badge-primary'}
                    onClick={options.action ? options.action : this.fetchData}>
                    {options.label}
                </span>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchWikiData
    }, dispatch)
}


function mapStateToProps(state) {
    const { wikiData } = state;

    return {
        wikiData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomBadges);