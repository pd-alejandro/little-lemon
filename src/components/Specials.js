import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card">
      <img src="" alt="" className="card__img" />
      <div className="card__content">
        <h3 className="card__title">Name</h3>
        <span className="card__price">$10.00</span>
        <p className="card__description">Lorem</p>
        <a href="/" className="card__link">
          Link
        </a>
      </div>
    </div>
  );
};

const Specials = () => {
  return (
    <section className="specials">
      <div class="specials__header">
        <div>
          <h2 className="section-title">This week specials!</h2>
        </div>
        <div>
          <Link to="/menu" className="btn">Online menu</Link>
        </div>
      </div>
      <div className="specials__list">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Specials;
