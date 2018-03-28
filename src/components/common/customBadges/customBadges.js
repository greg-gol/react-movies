import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ToolTip from '../toolTip/toolTip'

import { fetchWikiData } from '../../../actions/fetchWikiData';

import { WIKI_API_PARAMS } from '../../../common/constants'

import './customBadges.scss';


export class CustomBadge extends Component {

    render() {
        const { options } = this.props;
        const badge = (            
            <div className={this.props.action ? "customBadge" : "customBadge customBadge-noAction"}>
                <span 
                    className={options.className ? options.className : 'badge badge-pill badge-primary'}
                    onClick={this.props.action ? this.props.action : null}>
                    { options.label }
                </span>
            </div>);

        return options.label ? badge : null;
    }
}

class WikiBadge extends Component {

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
        
        if (!data || this.searchQuery !== data[0]) {
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
        const { data } = this.props.wikiData;

        return (
            <div className="wikiBadge">
                { this.state.showToolTip && data && data[0] === this.searchQuery ? this.renderToolTip(data) : null }
                <CustomBadge {...this.props} {...this.state} action={this.fetchData} />
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

export default connect(mapStateToProps, mapDispatchToProps)(WikiBadge);