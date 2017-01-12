import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FilmList from './FilmsList';
import * as actions from '../../actions/index';

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

        return this.props.films.data.map(item => {
            return (
                <FilmList
                    key={item.imdbID}
                    id={item.imdbID}
                    title={item.Title}
                    year={item.Year}
                    image={item.Poster}
                    type={item.Type}
                />
            )
        });
    }

    render() {
        return (
            <div>
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
