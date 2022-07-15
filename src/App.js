import React, { useState, useEffect } from 'react';
import './App.css';
//import {Switch, Route}  from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import MovieHome from './MovieHome';
import MoviesContainer from './MoviesContainer';
import MovieFavorite from './MovieFavorite';
import NavBar from './NavBar';

function App() {

  const [favoriteMovie, setFavoriteMovie] = useState([])
  const [movies, setMovie] = useState([])

  
  function addMyFavoriteMovie(movie) {
    const newList = [...favoriteMovie, movie]
    setFavoriteMovie(newList)
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


  const [page, setPage] = useState('/')

  return (
    <div className="App">
      <NavBar onChangePage={setPage} />
      <Routes>
        < Route path="/" element={<MovieHome />} />

        <Route />
        <Route path="/MoviesContainer" element={<MoviesContainer movies={movies}  addMyFavoriteMovie={addMyFavoriteMovie}/>}>

        </Route>
        <Route path="/MovieFavorite" element={<MovieFavorite favoriteMovie={favoriteMovie} />}>

        </Route>

      </Routes>
    </div>
  );
}

export default App;
