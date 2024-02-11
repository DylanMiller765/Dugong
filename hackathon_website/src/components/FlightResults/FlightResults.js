import './FlightResults.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons';

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
          <p className="flightInfo">
            Departure:
            <FontAwesomeIcon icon={faPlaneDeparture} className="plane-icon" style={{ color: '#34aadc' }} />
             New York
          </p>

          <p className="flightInfo">Arrival:
            <FontAwesomeIcon icon={faPlaneArrival} className ="plane-icon" style={{ color: '#63E6BE' }} />
            New York</p>
          <div className="flightPrice">Flight Cost: $300</div>
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
          <p className="flightInfo">
            Departure:
            <FontAwesomeIcon icon={faPlaneDeparture} className="plane-icon" style={{ color: '#34aadc' }} />            New York
          </p>
          <p className="flightInfo">Arrival:
            <FontAwesomeIcon icon={faPlaneArrival} className ="plane-icon" style={{ color: '#63E6BE' }} />
            New York</p>
          <div className="flightPrice">Flight Cost: $500</div>
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
          <p className="flightInfo">
            Departure:
            <FontAwesomeIcon icon={faPlaneDeparture} className="plane-icon" style={{ color: '#34aadc' }} />            New York
          </p>
          <p className="flightInfo">Arrival:
            <FontAwesomeIcon icon={faPlaneArrival} className ="plane-icon" style={{ color: '#63E6BE' }} />
            New York</p>
          <div className="flightPrice">Flight Cost: $700</div>
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
          <p className="flightInfo">
            Departure:
            <FontAwesomeIcon icon={faPlaneDeparture} className="plane-icon" style={{ color: '#34aadc' }} />            New York
          </p>
          <p className="flightInfo">Arrival:
            <FontAwesomeIcon icon={faPlaneArrival} className ="plane-icon" style={{ color: '#63E6BE' }} />
            New York</p>
          <div className="flightPrice">Flight Cost: $400</div>
          <p className="flightInfo">Airline: Air France</p>
          <p className="flightInfo">Departure Time:   11:00 AM</p>
          <p className="flightInfo">Arrival Time:   6:00 PM</p>
        </div>
      </a>
    </div>
  );
}

export default FlightResults;