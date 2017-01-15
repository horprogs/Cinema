import React from 'react';
import styles from './styles.css';

export default class Form extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Название"                                              
                    onChange={this.props.onChangeTitle}
                    required
                />
                <button className={styles.btn}>Найти</button>
            </form>
        )
    }
}

