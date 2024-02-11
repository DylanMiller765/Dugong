import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './Header.css'; // Import the CSS file

function Header() {
  // Define state to hold the input value
  const [userMessage, setUserMessage] = useState('');

  // Define a function to handle search button click
  const handleSearchClick = async () => {
    try {
      // Send a POST request to the /chat endpoint with the user input message
      const response = await axios.post('http://localhost:8080/chat', {
        message: userMessage
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Log the response from the server
      console.log('Response from server:', response.data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error sending search term to server:', error);
    }
  };

  // Define a function to update the user message state when the input changes
  const handleInputChange = (event) => {
    setUserMessage(event.target.value);
  };

  return (
    <header className="header">
      <div className="topContainer">
        <h1 className="title">Flight Scanner</h1>
      </div>
      <div className="bottomContainer">
        <p className="subtitle">Find the cheapest flight</p>
        <div className="searchBox">
          {/* Attach the onChange event listener to update userMessage */}
          <input
            type="text"
            value={userMessage}
            onChange={handleInputChange}
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