import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Search from './Search';
import '../assets/styles/NavBar.css';
import hamburgerIcon from '../assets/hamburger-svg.png';

function NavBar(props) {
  const [position, updatePosition] = useState('absolute');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let history = useHistory();

  //For handling navbar sticking to top of page when scrolled past.
  useEffect(() => {
    window.onscroll = () => {
      handleScroll();
    }
  }, [])

  const handleScroll = () => {
    console.log("Crap.");
    updatePosition(window.scrollY > (18*window.innerHeight/100) ? "fixed" : "absolute");
  }

  //For handling hamburger navbar being open or closed.
  useEffect( () => 
    history.listen( () => {
      setIsMenuOpen(false);
    })
  );

  return (
    <>
      <nav 
      onScroll={handleScroll} 
      style={{position}} 
      className={position === "absolute" ? "page-top" : "page-bottom"}>

        <img src={hamburgerIcon} 
          className="hamburger-menu-button"           
          onClick={ () => setIsMenuOpen(!isMenuOpen)} alt="hamburger menu icon"/>

        <div className={`menu ${(!isMenuOpen && window.innerWidth < 800) ? 'hidden' : ''}`}>
          <Search setSearchurl={props.setSearchurl}/>
          <Link to="/">Home</Link>
          <Link to="/posts/create_new_post">Create New Post</Link>
          <Link to="/posts">All Posts</Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar;