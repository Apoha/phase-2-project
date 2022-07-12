import React from 'react'
import { Link } from "react-router-dom"

function NavBar() {

    

  return (

    <div>NavBar

<nav>
            <Link to ="/">MovieHome</Link>
            <Link to="/about">MoviesContainer</Link>
            <Link to="/projects">MovieFavorite</Link>
        </nav>

    </div>
  )
}

export default NavBar
