import React from 'react';
import './Reservations.css';

function Reservations() {
  return (
    <div className="reservations">
      <h2>Make a Reservation</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" required/>

        <label>Date:</label>
        <input type="date" required/>

        <label>Time:</label>
        <input type="time" required/>

        <label>Number of Guests:</label>
        <input type="number" min="1" max="20" required/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Reservations;
