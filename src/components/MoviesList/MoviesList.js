import React from 'react';

import './MoviesList.css';

var divStyle = {
    width: '309px',
    height: '458px'
};

const movies = (props) => (
    <div className="col s12 m6 l3 mt-3">
        <div className="card">
            <div className="card-image">
                <img style={divStyle} className="image" src={props.poster} />
                <span className="card-title">{props.title}</span>
            </div>
            <div className="card-content">
            <p>Type: {props.type}</p>
            <p>Year: {props.year}</p>
            </div>
        </div>
    </div>
);

export default movies;