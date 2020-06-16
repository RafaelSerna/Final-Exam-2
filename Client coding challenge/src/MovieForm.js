import React from 'react';

function MovieForm( props ){
    const { title, year, rating, onChange, add } = props;
    return(
        <div>
            <form>
                <label> Title: </label>
                <input type="text" value={ title } onChange={ onChange } />
                <label> Year: </label>
                <input type="text" value={ year } onChange={ onChange } />
                <label> Rating: </label>
                <input type="text" value={ rating } onChange={ onChange } />
                <button onClick={ add }>
                    Add
                </button>
            </form>
        </div>
    );
}

export default MovieForm;