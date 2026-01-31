import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BookingForm = (props) => {
  const [date, setDate] = useState();
  const [guests, setGuests] = useState();
  const [resTime, setRestTime] = useState();
  const [occasion, setOccasion] = useState();

  const navigate = useNavigate();

  const timeOptions = props.times.map((time) => (
    <option key={time}>{time}</option>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.submit()) navigate("/confirmed");
  };
  return (
    <form style={formStyles} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Date</label>
      <div className="input-group">
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <label htmlFor="res-time">Time</label>
      <div className="input-group">
        <select
          id="res-time"
          value={resTime}
          onChange={(e) => setRestTime(e.target.value)}>
          {timeOptions}
        </select>
      </div>
      <label htmlFor="guests">Guests</label>
      <div className="input-group">
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>
      <label htmlFor="occasion">Occasion</label>{" "}
      <div className="input-group">
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>
      <button className="btn">Make your reservation</button>
    </form>
  );
};

const formStyles = { display: "grid", maxWidth: "320px", gap: "0.5rem" };

export default BookingForm;
