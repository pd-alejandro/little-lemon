import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BookingForm = (props) => {
  const [date, setDate] = useState();
  const [guests, setGuests] = useState();
  const [resTime, setRestTime] = useState();
  const [occasion, setOccasion] = useState();
  const [isValid, setIsValid] = useState(false);

  const navigate = useNavigate();

  const formRef = useRef(null);

  useEffect(() => {
    if (!isValid && formRef.current.checkValidity() === true) {
      setIsValid(true);
    }
    if (isValid && formRef.current.checkValidity() === false) {
      setIsValid(false)
    }
  }, [date, guests, resTime]);

  const timeOptions = props.times.map((time) => (
    <option key={time}>{time}</option>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.submit()) navigate("/confirmed");
  };
  return (
    <form style={formStyles} onSubmit={handleSubmit} ref={formRef}>
      <label htmlFor="res-date">Date</label>
      <div className="input-group">
        <input
          type="date"
          id="res-date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <label htmlFor="res-time">Time</label>
      <div className="input-group">
        <select
          id="res-time"
          value={resTime}
          required
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
          required
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>
      <label htmlFor="occasion">Occasion (optional)</label>{" "}
      <div className="input-group">
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}>
          <option disabled default>
            Select a occasion
          </option>
          <option>Birthday</option>
          <option>Engagement</option>
          <option>Anniversary</option>
        </select>
      </div>
      <button className="btn" disabled={!isValid}>Make your reservation</button>
    </form>
  );
};

const formStyles = { display: "grid", maxWidth: "320px", gap: "0.5rem" };

export default BookingForm;
