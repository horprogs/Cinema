import React from 'react';
import {Link} from 'react-router';
import styles from './styles.css';

export default class FilmSnippet extends React.Component {
    render() {
        return (
            <Link to={`/film/${this.props.id}`} className={styles.item}>
                <h1 className={styles.title}>{this.props.title}</h1>
                <div className={styles.info}><strong>Year:</strong> {this.props.year}</div>
                <div className={styles.info}><strong>Type:</strong> {this.props.type}</div>
                <img src={this.props.image} alt={this.props.title} width="300" className={styles.poster}/>
            </Link>
        )
    }
}