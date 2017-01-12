import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions';
import FilmCard from './FilmCard';

class PageFilm extends React.Component {
    componentWillMount() {
        let id = this.props.params.id;
        this.props.actions.fetchFilm(id);
    }

    getFields() {
        if (this.props.films.isFetching) {
            return <div>Loading...</div>;
        }
        if (this.props.films.data.Error) {
            return <div>Film not found</div>;
        }
        let filmInfo = this.props.films.data;
        return (
            <FilmCard filmInfo={filmInfo}/>
        )
    }

    render() {
        return (
            <div>
                {this.getFields()}
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
