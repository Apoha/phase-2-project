import React from 'react'
import MovieCard from './MovieCard'

function MovieFavorite({favoriteMovie, addMyFavoriteMovie, deleteFavoriteMovie}) {


  

  return (
    <div>My Favorite Movies
{favoriteMovie.map((movie) => <MovieCard key= {movie.id} movie={movie} handleAddMovieCard= {addMyFavoriteMovie}  handleDeleteMovieCard={deleteFavoriteMovie}/>)}
  </div>


  )
}

export default MovieFavorite