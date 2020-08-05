import React, { useState } from 'react';

function Search(params) {
  const [keywords, updateKeywords] = useState('');
  
  let searchurl= "";
  
  const handleChange = (e) => {
    updateKeywords(e.target.value);
  };

  const handleSearchKeywords = (e, keywords) => {
    e.preventDefault();
    searchurl = `https://api.airtable.com/v0/appVtcDvltW4WweAs/Table%201?filterByFormula=%3FfilterByFormula%3DFIND(%22%24%7B${keywords}%7D%22%2C%7BText%7D)%3E0&sort%5B0%5D%5Bfield%5D=&sort%5B0%5D%5Bdirection%5D=desc`;
    console.log(searchurl);
    window.location.href="/search_results";
    return searchurl;
  }

  return (
    <>
      <form onSubmit={handleSearchKeywords && params.setSearchurl(searchurl)}>
        <input type="text" placeholder="Search Posts" searchurl={searchurl} value={keywords} onChange={handleChange} />
        <input type="submit" value="Search" />
      </form>
    </>
  );
}

export default Search;