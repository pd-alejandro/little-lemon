import bruchetta from "../assets/bruchetta.svg";
import greekSalad from "../assets/greekSalad.jpg";
import lemonDessert from "../assets/lemonDessert.jpg";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__img-wrapper">
        <img src={props.img} alt={props.name} className="card__img" />
      </div>
      <div className="card__content">
        <h3 className="card__title">{props.name}</h3>
        <span className="card__price">${props.price}</span>
        <p className="card__description">{props.description}</p>
        <p className="card__link">Order for delivery</p>
      </div>
    </div>
  );
};

const Specials = () => {
  return (
    <section className="specials">
      <div className="container">
        <div className="specials__header">
          <div>
            <h2 className="section-title">This week specials!</h2>
          </div>
          <div>
            <Link to="/menu" className="btn">
              Online menu
            </Link>
          </div>
        </div>
        <div className="specials__list">
          <Card name="Bruchetta" img={bruchetta} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque et erat nec dignissim." price="10.00" />
          <Card
            name="Greek salad"
            img={greekSalad}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque et erat nec dignissim."
            price="9.00"
          />
          <Card
            name="Lemon dessert"
            img={lemonDessert}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque et erat nec dignissim."
            price="7.00"
          />
        </div>
      </div>
    </section>
  );
};

export default Specials;
