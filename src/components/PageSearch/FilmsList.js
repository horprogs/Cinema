import React from 'react';
import FilmSnippet from './FilmSnippet';
import styles from './styles.css';

export default class FilmList extends React.Component {
    getList() {
        return this.props.films.data.map(item => {
            return (
                <FilmSnippet
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
            <div className={styles.list}>
                {this.getList()}
            </div>
        )
    }

}