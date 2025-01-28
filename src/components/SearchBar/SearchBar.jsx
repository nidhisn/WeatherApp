import React from 'react';
import './SearchBar.css';

const SearchBar = ({ inputRef, search }) => (
  <div className="search-bar">
    <input ref={inputRef} type="text" placeholder="Search" />
    <img
      src={search_icon}
      alt="Search Icon"
      onClick={() => search(inputRef.current.value)}
    />
  </div>
);

export default SearchBar;
