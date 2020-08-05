import React from 'react';
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Posts from './components/Posts'
import ViewPost from './components/ViewPost'
import NewPost from './components/NewPost'
import Footer from './components/Footer'
import './App.css';

//Header and footer will appear on every page. Header contains NavBar.

function App() {
  return (
    <>
      <header>
        <h1>Logo and Name go up here.</h1>
        <NavBar />
      </header>

      <Route path="/" exact>
        <Posts />
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
