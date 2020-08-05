import React from 'react';
import { Link } from 'react-router-dom'
import Search from './Search'
import '../assets/NavBar.css'

function NavBar(params) {

  return (
    <>
      <nav>
        <Search setSearchurl={params.setSearchurl}/>
        <Link to="/">Home</Link>
        <Link to="/posts/create_new_post">Create New Post</Link>
        <Link to="/posts">All Posts</Link>
      </nav>
    </>
  )
}

export default NavBar;