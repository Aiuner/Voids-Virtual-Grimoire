import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Search from './Search'
import '../assets/NavBar.css'

function NavBar(props) {
  const [position, updatePosition] = useState('absolute');

  useEffect(() => {
    window.onscroll = () => {
      handleScroll();
    }
  }, [])

  const handleScroll = () => {
    console.log("Crap.");
    updatePosition(window.scrollY > (18*window.innerHeight/100) ? "fixed" : "absolute");
  }

  return (
    <>
      <nav onScroll={handleScroll} style={{position}} className={position === "absolute" ? "page-top" : "page-bottom"}>
        <Search setSearchurl={props.setSearchurl}/>
        <Link to="/">Home</Link>
        <Link to="/posts/create_new_post">Create New Post</Link>
        <Link to="/posts">All Posts</Link>
      </nav>
    </>
  )
}

export default NavBar;