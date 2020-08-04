import React, { useState } from 'react';
import axios from 'axios';

function NewPost() {
  const [title, updateTitle] = useState('');
  const [text, updateText] = useState('');
  const [mats, updateMats] = useState('');
  const [directions, updateDirections] = useState('');

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
    window.location.href="/";
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        
        <h2>Create New Post</h2>

        <label htmlFor="title">Title</label>
        <input type="text" id="title" onChange={ e => updateTitle(e.target.value)} value={title} />

        <label htmlFor="text">Text</label>
        <textarea type="text" id="text" cols="30" rows="10" onChange={e => updateText(e.target.value)} value={text}></textarea>

        <label htmlFor="mats">Materials or Ingredients</label>
        <textarea type="text" id="mats" cols="30" rows="10" onChange={e => updateMats(e.target.value)} value={mats}></textarea>

        <label htmlFor="directions">Directions</label>
        <textarea type="text" id="directions" cols="30" rows="10" onChange={e => updateDirections(e.target.value)} value={directions}></textarea>

        <input type="submit" value="Submit New Post" />

      </form>
    </>
  );
}

export default NewPost;