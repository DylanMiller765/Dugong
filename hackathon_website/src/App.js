// App.js

import React from 'react';
import Header from './components/Header/Header';
import FlightResults from './components/FlightResults/FlightResults';
function App() {
  return (
    <div className="App">
      <Header />
      <FlightResults />
      {/* Add other components and content here */}
    </div>
  );
}

export default App;
