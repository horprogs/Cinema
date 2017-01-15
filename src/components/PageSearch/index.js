import React from 'react';
import {browserHistory, Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FilmList from './FilmsList';
import * as actions from '../../actions/index';
import styles from './styles.css';

class PageSearch extends React.Component {
    componentWillMount() {
        let title = this.props.location.query.s;
        this.props.actions.fetchFilms(title);                                  
    }

    getList() {
        if (this.props.films.isFetching) {
            return <div>Loading...</div>;
        }

        if (!this.props.films.data) {
            return <div>Films not found</div>;
        }

        return <FilmList films={this.props.films}/>
    }

    render() {
        return (
            <div>
                <Link onClick={browserHistory.goBack} className={styles.back}>Back</Link>
                {this.getList()}
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
)(PageSearch)
