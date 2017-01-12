import React from 'react';

export default class FilmCard extends React.Component {
    getInfo() {
        let info = this.props.filmInfo;
        return Object.keys(info).map((key, i) => {
            if (key === 'Poster') {
                return (<div key={key}><strong>{key}</strong>:<img src={info[key]} alt="" width="100"></img></div>);
            }
            return (<div key={key}><strong>{key}</strong>: {info[key].toString()}</div>)
        });
    }

    render() {
        return (
            <div>
                {this.getInfo()}
            </div>
        )
    }
}