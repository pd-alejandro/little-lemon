import { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState();
  const [guests, setGuests] = useState();
  const [resTime, setRestTime] = useState();
  const [occasion, setOccasion] = useState();

  const timeOptions = props.times.map((time) => <option>{time}</option>);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(occasion);
  };
  return (
    <form style={formStyles} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={resTime}
        onChange={(e) => setRestTime(e.target.value)}>
        {timeOptions}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <button type="submit">Make Your reservation</button>
    </form>
  );
};

const formStyles = { display: "grid", maxWidth: "200px", gap: "20px" };

export default BookingForm;
