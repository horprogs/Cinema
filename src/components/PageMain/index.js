import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Form from './form';
import * as actions from '../../actions/index';

class PageMain extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Batman'
        }
    }

    handlerSubmit = (e) => {
        e.preventDefault();
        this.props.actions.fetchFilms(this.state.title);
    }

    handlerChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Поиск фильмов</h1>
                <Form onSubmit={this.handlerSubmit} onChangeTitle={this.handlerChangeTitle}/>
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
)(PageMain)