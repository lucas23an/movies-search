import React from 'react';

import './MoviesList.css';

const movies = (props) => (
    <article className="">
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">Author</div>
        </div>
    </article>
);

export default movies;