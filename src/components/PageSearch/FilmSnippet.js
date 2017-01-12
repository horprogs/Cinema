import React from 'react';
import {Link} from 'react-router';

export default class FilmSnippet extends React.Component {
    render() {
        return (
            <Link to={`/film/${this.props.id}`}>
                <h1>{this.props.title}</h1>
                <div>Year: {this.props.year}</div>
                <div>Type: {this.props.type}</div>
                <img src={this.props.image} alt={this.props.title} width="300"/>
            </Link>
        )
    }
}