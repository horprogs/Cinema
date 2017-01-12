import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions'

class PageFilm extends React.Component {
    getFields() {
    }

    render() {
        console.log('film', this.props)
        console.log('URL', this.props.location.query)
        return (
            <div>
            </div>
        )
    }

}

export default connect(
    state => state,
    dispatch => {
        return {
            actions: bindActionCreators(actions, dispatch)
        }
    }
)(PageFilm)
