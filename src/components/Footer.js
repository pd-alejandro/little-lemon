import { Link } from "react-router-dom";
import mainLogo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <img src={mainLogo} alt="Little Lemon logo" />
        </div>
        <div className="footer-links">
          <div className="doormat">
            <h3>Doormat Navigation</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/reservations">Reservations</Link>
              </li>
              <li>
                <Link to="/order">Order online</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h3>Contact</h3>
            <ul>
              <li>
                Address
              </li>
              <li>
                Phone number
              </li>
              <li>
                Email
              </li>
            </ul>
          </div>
          <div className="social-media">
            <h3>Social Media</h3>
            <ul>
              <li>
                Social Media #1
              </li>
              <li>
                Social Media #2
              </li>
              <li>
                Social Media #3
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
