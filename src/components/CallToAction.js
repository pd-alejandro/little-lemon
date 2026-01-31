import { Link } from "react-router-dom";
import restaurantFood from "../assets/restauranfood.jpg";
const CallToAction = () => {
  return (
    <section className="hero">
      <div>
        <h1 className="title">Little Lemon</h1>
        <p className="subtitle">Chicago</p>
        <p className="lead-text">
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails.
        </p>
        {/* <button>Reserve a table</button> */}
        <Link to="/reservations" className="btn">Reserve a table</Link>
      </div>
      <div>
        <div className="image-wrapper">
          <img src={restaurantFood} alt="chef showing a restaurant speciality" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
