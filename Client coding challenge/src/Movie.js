import React from 'react';

function Movie( props ){
    return(
        <div>
            <h2>{ props.title }</h2>
            <ul>
                <li>{ props.year }</li>
                <li>{ props.rating }</li>
            </ul>
        </div>
    );
}

export default Movie;