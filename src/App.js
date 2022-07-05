import React from 'react';
import './App.css';

import MovieHome from './MovieHome';

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

  
  return (
    <div className="App">
      <MovieHome />
    </div>
  );
}

export default App;
