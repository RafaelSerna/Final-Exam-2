const mongoose = require( 'mongoose' );
const uuid = require( 'uuid' );
/* 
    Your code goes here 
*/
const moviedexSchema = mongoose.Schema({
    movie_title: {
        type: String,
        required: true
    },
    movie_year: {
        type: Number,
        required: true
    },
    movie_rating: {
        type: Number,
        required: true
    },
    movie_id: {
        type: uuid(),
        required: true
    }
});

const moviedexCollection = mongoose.model('moviedex', moviedexSchema);

const Moviedex = {
    addNewMovie: function (newMovie) {
        return moviedexCollection
            .create(newMovie)
            .then(res => {
                return res;
            })
            .catch(err => {
                throw new Error(err);
            })
    },
    getAllMovies: function () {
        return moviedexCollection
            .find()
            .then(res => {
                return res;
            })
            .catch(err => {
                throw new Error(err);
            })
    }
}


module.exports = {
    moviedexSchema
};