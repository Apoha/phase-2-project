import React, {useState} from 'react';
import './App.css';
//import {Switch, Route}  from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import MovieHome from './MovieHome';
import MoviesContainer from './MoviesContainer';
import MovieFavorite from './MovieFavorite';
import NavBar from './NavBar';

function App() {

// const[movies, setMovie] = useState([])

// useEffect(()=> {

//   fetch("http://localhost:3001/movies")
//   .then((r) => r.json())

//    .then((json) => {
//     console.log( "this json data", json)
//     setMovie([...json])
// })

// }
// ,[])


const[page, setPage] = useState('/')
  
  return (
    <div className="App">
<NavBar onChangePage = {setPage}/>
<Routes>

< Route path ="/" />
<MovieHome />
<Route/>
<Route path = "/MoviesContainer">
  <MoviesContainer/>
</Route>
<Route path = "/MovieFavorite">
  <MovieFavorite/>
</Route>
     
</Routes>      
    </div>
  );
}

export default App;
