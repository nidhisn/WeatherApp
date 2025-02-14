import React, { useRef } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    if (onSearch) {
      onSearch(inputRef.current.value);
    }
  };

  return (
    <div className={styles.searchBar}>
      <input ref={inputRef} type="text" placeholder="Search for a city..." />
      <img src="/search.png" alt="Search Icon" onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;
