import React from 'react';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Form from './form';
import * as actions from '../../actions/index';
import styles from './styles.css';

class PageMain extends React.Component {
    constructor() {
        super();
        this.state = {
            title: ''
        }
    }

    handlerSubmit = (e) => {
        e.preventDefault();
        browserHistory.push(`/search?s=${this.state.title}`);
        //this.props.actions.fetchFilms(this.state.title);
    }

    handlerChangeTitle = (e) => {                                           
        this.setState({
            title: e.target.value
        })                                                     
    }

    render() {
        return (
            <div>
                <h1 className={styles.title}>Поиск фильмов</h1>
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