import React from 'react'
import MovieCard from './MovieCard'

function MovieFavorite({favoriteMovie}) {


  

  return (
    <div>My Favorite Movies
{favoriteMovie.map((movie) => <MovieCard key= {movie.id} movie={movie}/>)}
  </div>


  )
}

export default MovieFavorite