import React from 'react'
import MovieCard from './MovieCard'




function MoviesContainer({movies, addMyFavoriteMovie, deleteFavoriteMovie}) {

    
  
  return (
    <div className="movieContainer"> MoviesContainer
{movies.map((movie) => 
{
  return (<MovieCard key= {movie.id} movie= {movie} handleAddMovieCard={addMyFavoriteMovie} handleDeleteMovieCard={deleteFavoriteMovie}/>)
  }
)
}
  </div>
  )
}

export default MoviesContainer 