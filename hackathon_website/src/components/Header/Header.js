import React, { useRef } from 'react';
import './Header.css'; // Import the CSS file

function Header() {
  // Define a ref for the input element
  const searchInputRef = useRef(null);

  // Define a function to handle search button click
  const handleSearchClick = () => {
    // Access the current value of the input element using the ref
    const searchTerm = searchInputRef.current.value;
    // Perform search logic here
    console.log('Search term:', searchTerm);
  };

  return (
    <header className="header">
      <div className="topContainer">
        <h1 className="title">Flight Scanner</h1>
      </div>
      <div className="bottomContainer">
        <p className="subtitle">Find the cheapest flight</p>
        <div className="searchBox">
          {/* Attach the ref to the input */}
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search for flights..."
            className="searchInput"
          />
          {/* Attach the onClick event listener to the search button */}
          <button onClick={handleSearchClick} className="searchButton">
            Search
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
