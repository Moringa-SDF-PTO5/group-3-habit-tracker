import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <input type="text" className="searchbar" placeholder="Search..." />
      {/* Add your search functionality here */}
    </div>
  );
};

export default SearchBar;
