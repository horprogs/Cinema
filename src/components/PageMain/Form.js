import React from 'react';

export default class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'Batman'
        }
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <input
                    type="text"
                    name="title"
                    value={this.state.value}
                    placeholder="Название"
                    onChange={this.props.onChangeTitle}
                />
                <button>Найти</button>
            </form>
        )
    }
}

