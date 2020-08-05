import React, { useState } from 'react';

function Search() {
  const [keywords, updateKeywords] = useState('');
  const [searchResults, updateSearchResults] = useState([]);
  let searchurl= "";
  
  const handleChange = (e) => {
    updateKeywords(e.target.value);
  };

  const handleSearchKeywords = (e, keywords) => {
    e.preventDefault();
    searchurl = `?filterByFormula=%3FfilterByFormula%3DFIND(%22%24%7B${keywords}%7D%22%2C%7BText%7D)%3E0&sort%5B0%5D%5Bfield%5D=&sort%5B0%5D%5Bdirection%5D=asc`;
    
  }
  console.log(searchurl);

  return (
    <>
      <form onSubmit={handleSearchKeywords}>
        <input type="text" placeholder="Search Posts" searchurl={searchurl} value={keywords} onChange={handleChange} />
        <input type="submit" value="Search" />
      </form>
    </>
  );
}

export default Search;