import React from 'react'
import MovieCard from './MovieCard'




function MoviesContainer({movies, addMyFavoriteMovie}) {

    
  
  return (
    <div className="movieContainer"> MoviesContainer
{movies.map((movie) => 
{
  return (<MovieCard key= {movie.id} movie= {movie} handleAddMovieCard={addMyFavoriteMovie}/>)
  }
)
}
  </div>
  )
}

export default MoviesContainer 