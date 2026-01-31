const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial__rating">Rating</div>
      {/* <img src="img" alt="user avatar" className="testimonial__img" /> */}
      <h3 className="testimonial__user">Username</h3>
      <p className="testimonial__comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
};

const CustomersSay = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonials__list">
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>
    </section>
  );
};

export default CustomersSay;
