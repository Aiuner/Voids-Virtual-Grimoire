import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Posts from './components/Posts'
import ViewPost from './components/ViewPost'
import NewPost from './components/NewPost'
import Footer from './components/Footer'
import './App.css';

//Header and footer will appear on every page. Header contains NavBar.

function App() {
  const [searchurl, setSearchurl] = useState(``);


  return (
    <>
      <header>
        <img src="assets/Logo.png"></img>
        <h1>Logo and Name go up here.</h1>
        <NavBar setSearchurl={setSearchurl}/>
      </header>

      <Route path="/" exact>
        <Posts />
      </Route>

      <Route path="/search_results">
        <Posts searchurl={searchurl} />
      </Route>

      <Route path="/posts" exact>
        <Posts />
      </Route>

      <Route path="/posts/:id">
        <ViewPost />
      </Route>

      <Route path="/posts/create_new_post">
        <NewPost />
      </Route>

      <Footer />
    </>
  );
}

export default App;
