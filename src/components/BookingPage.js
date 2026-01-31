import BookingForm from "./BookingForm";

const BookingPage = (props) => {
  return (
    <>
      <h2 className="section-title">Booking</h2>
      <BookingForm times={props.times} />
    </>
  );
};

export default BookingPage;
