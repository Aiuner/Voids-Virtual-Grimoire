import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Search from './Search';
import '../assets/NavBar.css';
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
        <div className="menu"
          // 
          //hamburger menu show/hide functionality
          isMenuOpen={isMenuOpen}
          onToggleMenu={ () => setIsMenuOpen(!isMenuOpen)}>
          
          <button className="hamburger-menu-button">
            <image src={hamburgerIcon} className="hamburger"/>
          </button>
          
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