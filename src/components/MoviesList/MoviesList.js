import React from 'react';

import './MoviesList.css';

const movies = (props) => (
    <div className="col l2">
        <div className="card">
            <div className="card-image">
                <img src={props.poster} />
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