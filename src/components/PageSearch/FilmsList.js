import React from 'react';
import FilmSnippet from './FilmSnippet';

export default class FilmList extends React.Component {
    render() {
        return (
            <FilmSnippet
                id={this.props.id}
                title={this.props.title}
                year={this.props.year}
                image={this.props.image}
                type={this.props.type}
            />
        )
    }

}