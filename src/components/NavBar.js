import React from 'react';
import { Link, Router } from 'react-router-dom'
import Search from './Search'

function NavBar() {

  return (
    <>
      <nav>
        <Search />
        <Link to="/">Home</Link>
      </nav>
    </>
  )
}

export default NavBar;