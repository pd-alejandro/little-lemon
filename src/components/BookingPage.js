import BookingForm from "./BookingForm";

const BookingPage = (props) => {
  return (
    <section className="booking-section">
      <div className="container">
        <h2 className="section-title">Booking</h2>
        <BookingForm times={props.times} submit={props.submit} />
      </div>
    </section>
  );
};

export default BookingPage;
