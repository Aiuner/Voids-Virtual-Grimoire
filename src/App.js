import React from 'react';
import { Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Posts from './components/Posts'
import ViewPost from './components/ViewPost'
import NewPost from './components/NewPost'
import Footer from './components/Footer'
import './App.css';

//Header and footer will appear on every page. Header contains NavBar.

function App() {
  return (
    <>
      <Header />

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/posts">
        <Posts />
      </Route>

      <Route path="/posts/:title">
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
