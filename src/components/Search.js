import React from 'react';

function Search() {



  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <input type="text" placeholder="Search Posts" />
        <input type="submit" value="Search" />
      </form>
    </>
  );
}

export default Search;