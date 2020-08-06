import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Posts from './components/Posts'
import ViewPost from './components/ViewPost'
import NewPost from './components/NewPost'
import Footer from './components/Footer'
import './App.css';
import logo from './assets/Logo.png'

function App() {
  const [searchurl, setSearchurl] = useState(``);

  return (
    <>
      <header>
        <img src={logo} className="logo" alt="Logo"/>
        <h1 className="page-name-hidden-mobile">oid's Virtual Grimoire</h1>
        <h1 className="page-name-hidden-desktop">Void's Virtual Grimoire</h1>
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
