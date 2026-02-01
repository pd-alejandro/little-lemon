import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const today = new Date().toISOString().split("T")[0];

const BookingForm = (props) => {
  const [date, setDate] = useState(today);
  const [guests, setGuests] = useState();
  const [resTime, setRestTime] = useState();
  const [occasion, setOccasion] = useState();

  const [isValid, setIsValid] = useState(false);

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const formRef = useRef(null);

  useEffect(() => {
    if (!isValid && formRef.current.checkValidity() === true) {
      setIsValid(true);
    }
    if (isValid && formRef.current.checkValidity() === false) {
      setIsValid(false);
    }
  }, [date, guests, resTime]);

  const timeOptions = props.times.map((time) => (
    <option key={time}>{time}</option>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.submit()) navigate("/confirmed");
  };

  const validateFields = (validationMessage, name, isValid) => {
    if (!isValid) {
      setErrors((prevErrors) => {
        return { ...prevErrors, [name]: validationMessage };
      });
    } else {
      setErrors((prevErrors) => {
        return { ...prevErrors, [name]: undefined };
      });
    }
  };

  const handleBlur = (e) => {
    const { validationMessage, name } = e.currentTarget;
    const isValid = e.currentTarget.checkValidity();
    validateFields(validationMessage, name, isValid);
  };

  return (
    <form style={formStyles} onSubmit={handleSubmit} ref={formRef}>
      <label htmlFor="res-date">Date</label>
      <div className="input-group">
        <input
          type="date"
          id="res-date"
          name="date"
          min={today}
          required
          value={date}
          onChange={(e) => {
            const { validationMessage, name } = e.currentTarget;
            const isValid = e.currentTarget.checkValidity();
            validateFields(validationMessage, name, isValid);
            setDate(e.target.value);
          }}
          onBlur={handleBlur}
        />
        {errors["date"] && <p className="error-msg">{errors["date"]}</p>}
      </div>
      <label htmlFor="res-time">Time</label>
      <div className="input-group">
        <select
          id="res-time"
          name="res-time"
          value={resTime}
          required
          onChange={(e) => {
            const { validationMessage, name } = e.currentTarget;
            const isValid = e.currentTarget.checkValidity();
            validateFields(validationMessage, name, isValid);
            setRestTime(e.target.value);
          }}>
          {timeOptions}
        </select>
        {errors["res-time"] && (
          <p className="error-msg">{errors["res-time"]}</p>
        )}
      </div>
      <label htmlFor="guests">Guests</label>
      <div className="input-group">
        <input
          type="number"
          name="guests"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          required
          onChange={(e) => {
            const { validationMessage, name } = e.currentTarget;
            const isValid = e.currentTarget.checkValidity();
            validateFields(validationMessage, name, isValid);
            setGuests(e.target.value);
          }}
          onBlur={handleBlur}
        />
        {errors["guests"] && <p className="error-msg">{errors["guests"]}</p>}
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
      <button className="btn" disabled={!isValid}>
        Make your reservation
      </button>
    </form>
  );
};

const formStyles = { display: "grid", maxWidth: "320px", gap: "0.5rem" };

export default BookingForm;
