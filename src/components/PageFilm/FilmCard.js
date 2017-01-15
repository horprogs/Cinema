import React from "react";
import styles from "./styles.css";

export default class FilmCard extends React.Component {
    getInfo() {
        let info = this.props.filmInfo;
        return Object.keys(info).map((key, i) => {
            if (key === 'Poster') {
                return (
                    <div className={styles.row}>
                        <div key={key} className={styles.cell}><strong>{key}</strong>:<img src={info[key]} alt="" className={styles.poster}></img></div>
                    </div>
                );
            }
            return (
                <div className={styles.row}>
                    <div key={key} className={styles.cell}><strong>{key}</strong>: {info[key].toString()}</div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className={styles.table}>
                {this.getInfo()}
            </div>
        )
    }
}