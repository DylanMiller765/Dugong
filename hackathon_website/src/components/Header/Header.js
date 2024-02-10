// Header.js

import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <div style={topContainerStyle}>
        <h1 style={titleStyle}>Flight Scanner</h1>
      </div>
      <div style={bottomContainerStyle}>
        <p style={subtitleStyle}>Find the cheapest Flight</p>
        <div style={searchBoxStyle}>
          <input type="text" placeholder="Search for flights..." style={searchInputStyle} />
          <button style={searchButtonStyle}>Search</button>
        </div>
      </div>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#05203C',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
};

const topContainerStyle = {
  marginBottom: '10px', // Add some space between top and bottom containers
};

const titleStyle = {
  margin: 0, // Remove default margin for <h1>
};

const bottomContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Align items to the center
  justifyContent: 'center', // Center items horizontally
  minHeight: '100px', // Ensure there's some height for vertical centering
};

const subtitleStyle = {
  margin: 0, // Remove default margin for <p>
  marginBottom: '5px', // Add some space between title and subtitle
};

const searchBoxStyle = {
  display: 'flex',
  alignItems: 'center',
};

const searchInputStyle = {
  marginRight: '10px',
  padding: '8px 12px', // Increased padding
  width: '300px', // Increased width of the input
  borderRadius: '20px', // Rounded search box
};

const searchButtonStyle = {
  padding: '8px 16px', // Increased padding
  backgroundColor: '#0062E3',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  borderRadius: '20px', // Rounded search button
};

export default Header;
