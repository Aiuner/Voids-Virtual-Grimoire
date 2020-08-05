import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Search(props) {
  const [keywords, updateKeywords] = useState('');
  let history = useHistory();
  
  const handleChange = (e) => {
    updateKeywords(e.target.value);
  };

  const handleSearchKeywords = (e) => {
    e.preventDefault();
    let searchurl = `https://api.airtable.com/v0/appVtcDvltW4WweAs/Table%201?filterByFormula=FIND(LOWER("${keywords}"),LOWER({Text}))>0`;
    console.log(searchurl);
    props.setSearchurl(searchurl);
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