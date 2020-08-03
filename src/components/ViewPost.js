import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function ViewPost () {
  const params = useParams();
  const [post, updatePost] = useState({});
  
  useEffect(() => {
    let data = [];

    const apiCall = async () => {

      if (window.location.pathname === "/posts/:title") {
        console.log("This version of ViewPost runs if we're on an individual post's page.");

        data = await axios.get(
          `https://api.airtable.com/v0/appVtcDvltW4WweAs/Table%201/${params.id}`,
          {
            headers: {
              'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
            },
          }
        );
        console.log(data);
        updatePost(data.data.records);
        
        return 
      } 

      else {
        console.log("This version of ViewPost runs everywhere but the individual post pages.")

        return (
          <>
            <div className="postcard" post={post} key={post.fields.Title}>
              <Link to={`/posts/${post.fields.Title}`}>
                <h2>{post.fields.Title} - {post.fields.created_at}</h2>
              </Link>
              <p>{post.fields.Text}</p>
            </div>
          </>
        );
      }
    }
    apiCall();
  }, [params])
}

export default ViewPost;