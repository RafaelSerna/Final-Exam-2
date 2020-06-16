const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const jsonParser = bodyParser.json();
const { DATABASE_URL, PORT } = require( './config' );
const cors = require( './middleware/cors' );
const validateToken = require('./middleware/token-validation.js')
const { Moviedex } = require( './models/moviedex-model.js' )

const app = express();

app.use( cors );

/* 
    Your code goes here 
*/

app.post('/api/add-movie', (movie_title, movie_year, movie_rating), validateToken, (req, res) => {
    if (!movie_title || !movie_year || !movie_rating) {
        res.statusMessage = 'You need to send all movie fields to add the movie to the movie list';
        return res.status(403).end();
    }
    Moviedex.addNewMovie({movie_title, movie_year, movie_rating})
        .then((res) => {
            return res.status(200).end();
        })
        .catch((err) => {
            throw new Error(err);
        })

})

app.get('/api/movies', validateToken, (req, res) => {
    Moviedex.getAllMovies()
        .then((movie) => {
            res.status(200).json(movie)
        }).catch((err) => {
            res.statusMessage = 'No movies found in the moviedex'
            return res.status(404).end()
        })
})

app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );
    new Promise( ( resolve, reject ) => {
        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});