import React from 'react';

function MovieForm( props ){
    const { addQuery, onChange, handleAdd } = props;
    return(
        <div>
            <form>
                <label> Title: </label>
                <input type="text" value={ addQuery.title } onChange={ onChange } />
                <label> Year: </label>
                <input type="text" value={ addQuery.year } onChange={ onChange } />
                <label> Rating: </label>
                <input type="text" value={ addQuery.rating } onChange={ onChange } />
                <button onClick={ handleAdd }>
                    Add
                </button>
            </form>
        </div>
    );
}

export default MovieForm;