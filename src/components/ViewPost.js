import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FixLists from './FixLists';
import '../assets/styles/ViewPost.css';

function ViewPost() {
  const params = useParams();
  const [post, updatePost] = useState({});

  useEffect(() => {
    const apiCall = async () => {
      let data = await axios.get(
        `https://api.airtable.com/v0/appVtcDvltW4WweAs/Table%201/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      updatePost(data.data);
    };
    apiCall();
  }, [params]);

  //commented out function to protect posts from errants clicks from friends
  //
  // const deletePost = async () => {
  //   const data = await axios.delete(`https://api.airtable.com/v0/appVtcDvltW4WweAs/Table%201/${params.id}`, {
  //     headers: {
  //       'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  //     }
  //   });
  //   updatePost(!post);
  //   window.location.href="/";
  // }

  if (post.fields) {
    return (
      <>
      <main>
        <div className="full-post">
          <h2>{post.fields.Title}</h2>
          <h3>{post.fields.Date}</h3>
          <p>{post.fields.Text}</p>
          <p><ul>{post.fields.MaterialsOrIngredients && FixLists(post.fields.MaterialsOrIngredients)}</ul></p>
          <p><ul>{post.fields.Directions && FixLists(post.fields.Directions)}</ul></p>
          {/* <button onClick={deletePost}>Delete This Post</button> */}
        </div>
        </main>
      </>
    );
  } 
  else {
    return null;
  }
}

export default ViewPost;