import React, { useState, useEffect } from 'react';
import './App.css';
//import {Switch, Route}  from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import MovieHome from './MovieHome';
import MoviesContainer from './MoviesContainer';
import MovieFavorite from './MovieFavorite';
import NavBar from './NavBar';
//import Reviews from './Reviews';
function App() {

  const [favoriteMovie, setFavoriteMovie] = useState([])
  const [movies, setMovie] = useState([])

  
  function addMyFavoriteMovie(movie) {
    const newList = [...favoriteMovie, movie]
    setFavoriteMovie(newList)
  }


  function deleteFavoriteMovie(deleteMovie) {

    const updatedMovie = movies.filter((movie) => movie.id !== deleteMovie.id);
    setMovie(updatedMovie);
  }





  useEffect(() => {

    fetch("http://localhost:3500/movies")
      .then((r) => r.json())

      .then((json) => {
        console.log("this json data", json)
        setMovie([...json])
      })

  }
    , [])



    // const moviesUpdate = (movie) => {
    //   setMovie([...movies, movie])
    // }


  const [page, setPage] = useState('/')

  return (
    <div className="App">  <h1>Welcome to Movie Wolrd !</h1>
      <NavBar onChangePage={setPage} />
      <Routes>
        < Route path="/" element={<MovieHome />} />

        <Route />
        <Route path="/MoviesContainer" element={<MoviesContainer movies={movies}  addMyFavoriteMovie={addMyFavoriteMovie} deleteFavoriteMovie={deleteFavoriteMovie}/>}>

        </Route>
        <Route path="/MovieFavorite" element={<MovieFavorite favoriteMovie={favoriteMovie} addMyFavoriteMovie={addMyFavoriteMovie} deleteFavoriteMovie={deleteFavoriteMovie}/>}>

        </Route>
        {/* <Route path="/Reviews" element={<Reviews moviesUpdate={moviesUpdate} />}>
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
