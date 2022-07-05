import React from 'react'
import MovieCard from './MovieCard'

function MovieFavorite({favoriteMovie, addMyFavoriteMovie}) {


  

  return (
    <div >MovieCard
{favoriteMovie.map((movie) => <MovieCard key= {movie.id} favoriteMovie= {favoriteMovie} handleAddMovieCard={addMyFavoriteMovie}/>)}

    </div>


  )
}

export default MovieFavorite