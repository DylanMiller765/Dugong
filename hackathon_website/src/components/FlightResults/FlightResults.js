import React from 'react';
import './FlightResults.css'; // Import the CSS file

function FlightResults() {
  return (
    <div className="flightResults">
      <a
        href="https://www.google.com/flights"
        target="_blank"
        rel="noopener noreferrer"
        className="flightResultCard"
      >
        <div className="flightResult">
          <h3 className="flightResultTitle">Flight   1</h3>
          <p className="flightInfo">Departure: New York</p>
          <p className="flightInfo">Arrival: London</p>
          <p className="flightInfo">Flight Cost: $300</p>
          <p className="flightInfo">Airline: Delta</p>
          <p className="flightInfo">Departure Time:   10:00 AM</p>
          <p className="flightInfo">Arrival Time:   3:00 PM</p>
        </div>
      </a>
      {/* Existing card  2 */}
      <a
        href="https://www.google.com/flights"
        target="_blank"
        rel="noopener noreferrer"
        className="flightResultCard"
      >
        <div className="flightResult">
          <h3 className="flightResultTitle">Flight   2</h3>
          <p className="flightInfo">Departure: London</p>
          <p className="flightInfo">Arrival: Tokyo</p>
          <p className="flightInfo">Flight Cost: $500</p>
          <p className="flightInfo">Airline: British Airways</p>
          <p className="flightInfo">Departure Time:   5:00 PM</p>
          <p className="flightInfo">Arrival Time:   10:00 PM</p>
        </div>
      </a>
      {/* Existing card  3 */}
      <a
        href="https://www.google.com/flights"
        target="_blank"
        rel="noopener noreferrer"
        className="flightResultCard"
      >
        <div className="flightResult">
          <h3 className="flightResultTitle">Flight   3</h3>
          <p className="flightInfo">Departure: Tokyo</p>
          <p className="flightInfo">Arrival: New York</p>
          <p className="flightInfo">Flight Cost: $700</p>
          <p className="flightInfo">Airline: Japan Airlines</p>
          <p className="flightInfo">Departure Time:   9:00 AM</p>
          <p className="flightInfo">Arrival Time:   2:00 PM</p>
        </div>
      </a>
      {/* New card  4 */}
      <a
        href="https://www.google.com/flights"
        target="_blank"
        rel="noopener noreferrer"
        className="flightResultCard"
      >
        <div className="flightResult">
          <h3 className="flightResultTitle">Flight   4</h3>
          <p className="flightInfo">Departure: New York</p>
          <p className="flightInfo">Arrival: Paris</p>
          <p className="flightInfo">Flight Cost: $400</p>
          <p className="flightInfo">Airline: Air France</p>
          <p className="flightInfo">Departure Time:   11:00 AM</p>
          <p className="flightInfo">Arrival Time:   6:00 PM</p>
        </div>
      </a>
    </div>
  );
}

export default FlightResults;
