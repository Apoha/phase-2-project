import React from 'react'




function MovieHome() {

    //const[movies, setMovie] = useState([])
    // const[favoriteMovie, setFavoriteMovie] = useState([])

    // useEffect(()=> {
    
    //   fetch("http://localhost:3500/movies")
    //   .then((r) => r.json())
    
    //    .then((json) => {
    //     // console.log( "this json data", json)
    //     setMovie([...json])
    // })
    
    // }
    // ,[])



    // function addMyFavoriteMovie(movie) {
    //     const newList= [...favoriteMovie, movie]
    //     setFavoriteMovie(newList)
    //    }


  return (
    <div className="movieName"> <h1>Welcome to Movie Wolrd !</h1>
    <img src="https://n6s6b6w9.stackpathcdn.com/client/w_700,ret_wait/https://appgrooves.com/cdn/mc/GAME_TRIVIA/11_w730.jpg" 
    alt="World Movies" 
    width="750"/>
    </div>
    
  )
}

export default MovieHome