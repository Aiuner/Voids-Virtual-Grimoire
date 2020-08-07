import React from 'react';

  const FixLists = (str) => {
    const contentwList = str.split('- ').map( (txt) => <li>{txt}</li>);
    if (contentwList.length > 1) {
      contentwList.shift();
    }
    console.log(str.split(' - '));
    console.log(contentwList);
    return contentwList;
  }

  export default FixLists;