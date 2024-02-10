// Header.js
import React from 'react';
import './Header.css'// Import the CSS file

function Header() {
  return (
    <header className="header">
      <div className="topContainer">
        <h1 className="title">Flight Scanner</h1>
      </div>
      <div className="bottomContainer">
        <p className="subtitle">Find the cheapest Flight</p>
        <div className="searchBox">
          <input type="text" placeholder="Search for flights..." className="searchInput" />
          <button className="searchButton">Search</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
