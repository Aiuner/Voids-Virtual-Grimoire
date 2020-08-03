import React from 'react';
import { Link } from 'react-router-dom'
import Search from './Search'

function NavBar() {

  return (
    <>
      <nav>
        <Search />
        <Link to="/">Home</Link>
        <Link to="/posts/create_new_post">Create New Post</Link>
        <Link to="/posts">All Posts</Link>
      </nav>
    </>
  )
}

export default NavBar;