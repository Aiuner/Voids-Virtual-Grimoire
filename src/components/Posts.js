import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/Posts.css'


function Posts(props) {
  const [posts, updatePosts] = useState([]);
  const [fetchPosts, updateFetchPosts] = useState(false);
  let url = null;
  if (window.location.pathname === "/") {
    url = "https://api.airtable.com/v0/appVtcDvltW4WweAs/Table%201?maxRecords=7&view=Grid%20view&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc";
  }
  else if (window.location.pathname === "/posts") {
    url = "https://api.airtable.com/v0/appVtcDvltW4WweAs/Table%201?view=Grid%20view&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc";
  }
  else if (window.location.pathname === "/search_results") {
    url = props.searchurl;
  }
  else {
    console.log("Error: The Posts component has been called but I don't know what to do for this pathname.")
  }

  useEffect(() => {
    const apiCall = async () => {
        let postsData = await axios.get(`${url}`,
          {
            headers: {
              'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
            },
          });
        //console.log(postsData.data.records);
        updatePosts(postsData.data.records); 
        }
    apiCall();
  }, [fetchPosts, url]);

  return (
    <>
      <main>
        {posts.map( post => <>
            <div className="postcard">
              <Link to={`/posts/${post.id}`}>
                <h2>{post.fields.Title}</h2>
              </Link>
              <h3>{post.fields.Date}</h3>
              <p>{post.fields.Text}</p>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default Posts;