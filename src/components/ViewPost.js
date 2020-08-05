import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ViewPost() {
  const params = useParams();
  //console.log(params);
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
      //console.log(data.data);
      updatePost(data.data);
    };
    apiCall();
  }, [params]);

  const deletePost = async () => {
    const data = await axios.delete(`https://api.airtable.com/v0/appVtcDvltW4WweAs/Table%201/${params.id}`, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    });
    updatePost(!post);
    window.location.href="/";
  }

  if (post.fields) {
    return (
      <>
        <div className="full-post">
          <h2>
            {post.fields.Title} - {post.fields.Date}
          </h2>
          <p>{post.fields.Text}</p>
          <p>{post.fields.MaterialsOrIngredients}</p>
          <p>{post.fields.Directions}</p>
          <button onClick={deletePost}>Delete This Post</button>
        </div>
      </>
    );
  } 
  else {
    return null;
  }
}

export default ViewPost;