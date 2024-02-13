import React from 'react';
import './FlightResults.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import { flightData } from '../../server/app'

// Now you can use flightData in this file
console.log(flightData);

function FlightResults() {
  // const flightData = [
  //   {
  //     departureLocation: "New York",
  //     arrivalLocation: "London",
  //     airline: "Delta",
  //     departureTime: "10:00 AM",
  //     arrivalTime: "3:00 PM",
  //     flightCost: 300
  //   },
  //   {
  //     departureLocation: "New York",
  //     arrivalLocation: "Paris",
  //     airline: "British Airways",
  //     departureTime: "5:00 PM",
  //     arrivalTime: "10:00 PM",
  //     flightCost: 5000
  //   },
  //   {
  //     departureLocation: "New York",
  //     arrivalLocation: "Tokyo",
  //     airline: "Japan Airlines",
  //     departureTime: "9:00 AM",
  //     arrivalTime: "2:00 PM",
  //     flightCost: 700
  //   },
  //   {
  //     departureLocation: "New York",
  //     arrivalLocation: "Berlin",
  //     airline: "Air France",
  //     departureTime: "11:00 AM",
  //     arrivalTime: "6:00 PM",
  //     flightCost: 400
  //   }
  // ];

  return (
    <div className="flightResults">
      
      {flightData && flightData.length > 0 ? (
        flightData.map((flight, index) => (
          <a
            href="https://www.google.com/flights"
            target="_blank"
            rel="noopener noreferrer"
            className="flightResultCard"
            key={index}
          >
            <div className="flightResult">
              <h3 className="flightResultTitle">Flight {index + 1}</h3>
              <p className="flightInfo">
                Departure:
                <FontAwesomeIcon icon={faPlaneDeparture} className="plane-icon" style={{ color: '#34aadc' }} />
                {flight.departureLocation}
              </p>
              <p className="flightInfo">Arrival:
                <FontAwesomeIcon icon={faPlaneArrival} className ="plane-icon" style={{ color: '#63E6BE' }} />
                {flight.arrivalLocation}
              </p>
              <div className="flightPrice">Flight Cost: ${flight.flightCost}</div>
              <p className="flightInfo">Airline: {flight.airline}</p>
              <p className="flightInfo">Departure Time: {flight.departureTime}</p>
              <p className="flightInfo">Arrival Time: {flight.arrivalTime}</p>
            </div>
          </a>
          
        ))
      ) : (
        <p>No flight data available</p>
      )}
    </div>
  );
}

export default FlightResults;
