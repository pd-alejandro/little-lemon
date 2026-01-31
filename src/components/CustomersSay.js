const Testimonial = () => {
    return (
        <div class="testimonial">
            <div className="testimonial__rating">Rating</div>
            <img src="" alt="user avatar" className="testimonial__img" />
            <h3 className="testimonial__user">Username</h3>
            <p className="testimonial__comment">Lorem ipsum</p>
        </div>
    )
}

const CustomersSay = () => {
  return (
    <section class="testimonials">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonials__list">
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </section>
  );
};

export default CustomersSay;
