import React, {useState, useEffect} from 'react'
import MoviesContainer from './MoviesContainer'
import MovieFavorite from './MovieFavorite'


function MovieHome() {

    const[movies, setMovie] = useState([])
    const[favoriteMovie, setFavoriteMovie] = useState([])

    

    useEffect(()=> {
    
      fetch("http://localhost:3001/movies")
      .then((r) => r.json())
    
       .then((json) => {
        console.log( "this json data", json)
        setMovie([...json])
    })
    
    }
    ,[])




    function addMyFavoriteMovie(movie) {
        const newList= [...favoriteMovie, movie]
        setFavoriteMovie(newList)
       }


  return (
    <div>MovieHome
        {/* <MoviesContainer movieList={movieList} /> */}
        <MoviesContainer movies={movies}  addMyFavoriteMovie={addMyFavoriteMovie}/>
        <MovieFavorite  favoriteMovie={favoriteMovie}  />
    </div>
    
  )
}

export default MovieHome