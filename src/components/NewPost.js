import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles/NewPost.css'

function NewPost() {
  const [title, updateTitle] = useState('');
  const [text, updateText] = useState('');
  const [mats, updateMats] = useState('');
  const [directions, updateDirections] = useState('');

  //posts to the airtable
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("https://api.airtable.com/v0/appVtcDvltW4WweAs/Table%201", {
      fields: {
        Title: title,
        Text: text,
        MaterialsOrIngredients: mats,
        Directions: directions
      }
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': 'application/json'
      }
    })
    //redirects to homepage after submit, where the new post will appear
    window.location.href="/";
  }

  return (
    <>
      <div className="new-post-form">
        
        <h2>Create New Post</h2>

        <form onSubmit={handleSubmit}>

          <section className="form-input">
          <label htmlFor="title">Title</label><br />
          <input type="text" id="title" onChange={ e => updateTitle(e.target.value)} value={title} className="title-input"/>
          </section>

          <section className="form-input">
          <label htmlFor="text">Text</label><br />
          <textarea type="text" id="text" cols="30" rows="10" onChange={e => updateText(e.target.value)} value={text}></textarea>
          </section>

          <section className="form-input">
          <label htmlFor="mats">Materials or Ingredients</label><br />
          <textarea type="text" id="mats" cols="30" rows="10" onChange={e => updateMats(e.target.value)} value={mats}></textarea>
          </section>

          <section className="form-input">
          <label htmlFor="directions">Directions</label><br />
          <textarea type="text" id="directions" cols="30" rows="10" onChange={e => updateDirections(e.target.value)} value={directions}></textarea>
          </section>

          <input type="submit" value="Submit New Post" />

        </form>
      </div>
    </>
  );
}

export default NewPost;