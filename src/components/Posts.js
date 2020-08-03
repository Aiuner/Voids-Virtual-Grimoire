import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ViewPost from './ViewPost'
import axios from 'axios';


function Posts(props) {
  const [posts, updatePosts] = useState([]);
  const [fetchPosts, updateFetchPosts] = useState(false);


  useEffect(() => {
    let postsData = [];

    const apiCall = async () => {

      if (window.location.pathname === "/") {
        console.log("This version of Posts runs if we're on the Home page.");

        postsData = await axios.get(
          "https://api.airtable.com/v0/appVtcDvltW4WweAs/Table%201?maxRecords=3&view=Grid%20view",
          {
            headers: {
              'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
            },
          }
        );
        console.log(postsData);
        updatePosts(postsData.data.records);
        return postsData;
      } 
      else if (window.location.pathname === "/posts") {
        console.log("This version of Posts runs if we're in /posts .");

        postsData = await axios.get(
          "https://api.airtable.com/v0/appVtcDvltW4WweAs/Table%201?view=Grid%20view",
          {
            headers: {
              'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
            },
          }
        );
        console.log(postsData);
        updatePosts(postsData.data.records);
        return postsData;
      } 
      else {
        console.log("Error in Posts Switch.");

        return null;
      }
    }
    apiCall();
  }, [fetchPosts]);

  return (
    <>
      <main>
        <h1>Posts Component puts stuff here.</h1>
        {posts.map( post =>
        <>
          <ViewPost post={post} key={post.id}/>
        </>
        )}
      </main>
    </>
  );
}

export default Posts;