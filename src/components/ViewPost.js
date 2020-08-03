import React from 'react';

function ViewPost (props) {
	const post= props.post;

  return (
    <div>
      <h2>{post.fields.Title} - {post.fields.created_at}</h2>
      <p>{post.fields.Text}</p>
    </div>
  )
}

export default ViewPost;