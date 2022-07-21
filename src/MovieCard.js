import React from 'react'
import Ratings from './Ratings'
import Reviews from './Reviews'


function MovieCard({movie, handleAddMovieCard, handleDeleteMovieCard}) {

//const movieKeys = Object.keys(movie)

//console.log(movieKeys)


  return (
    <div onClick={() => handleAddMovieCard(movie)}>
 
    <h2>MyMovieCard</h2>
    <p>Title {movie.Title}</p>
    <p>Year {movie.Year}</p>
    <p>Rated {movie.Rated}</p>
    <p>Release {movie.Release}</p>
    <p>Runtime {movie.Runtime}</p>
    <p>Genre {movie.Genre}</p>
    <p>Director {movie.Director}</p>
    <p>writer {movie.writer}</p>
    <p>Actors {movie.Actors}</p>
    <p>Plot {movie.Plot}</p>
    <p>Language {movie.Language}</p>
    <p>Country {movie.Country}</p>
    <p>Awards {movie.Awards}</p>
    <img src= {movie.Poster} alt={"Poster of the Movie"}/>
   {/* <p>Ratings</p> {movie.Ratings.map((rating, index)  => {
    return <Ratings key={index} source={rating.Source} value={rating.Value}/>
    })}  */}
    <p>Metascore {movie.Metascore}</p>
    <p>imdbRating {movie.imdbRating}</p>
    <p>imdbVotes {movie.imdbVotes}</p>
    <p>imdbID {movie.imdbID}</p>
    <p>Type {movie.Type}</p>
    <p>DVD {movie.DVD}</p>
    <p>BoxOffice {movie.BoxOffice}</p>
    <p>Production {movie.Production}</p>
    <p>Website {movie.Website}</p>
    <p>Response {movie.Response}</p>
    {/* {movieKeys} */}
    <span>
              <div className="delete button">
                <button
                  className="mini button"
                  onClick={(e) =>{
                    e.stopPropagation()
                    handleDeleteMovieCard(movie.id)
                  }
                 }
                >
                  x
                </button>
              </div>
            </span>
    { <Reviews/>}
    </div>
  )
}

export default MovieCard
