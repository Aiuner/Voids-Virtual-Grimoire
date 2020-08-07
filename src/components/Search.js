import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Search(props) {
  const [keywords, updateKeywords] = useState('');
  let history = useHistory();
  
  //deals with real-time input, stores input from Search field
  const handleChange = (e) => {
    updateKeywords(e.target.value);
  };

  //runs search of input saved from handleChange
  const handleSearchKeywords = (e) => {
    e.preventDefault();
    let searchurl = `https://api.airtable.com/v0/appVtcDvltW4WweAs/Table%201?filterByFormula=FIND(LOWER("${keywords}"),LOWER({Text}))>0`;
    console.log(searchurl);
    props.setSearchurl(searchurl);
    //better way to change path to /search_results
    history.push("/search_results");
  }

  return (
    <>
      <form onSubmit={handleSearchKeywords}>
        <input type="text" placeholder="Search Posts" value={keywords} onChange={handleChange} />
        <input type="submit" value="Search" />
      </form>
    </>
  );
}

export default Search;