import { Link } from "react-router-dom";
import mainLogo from "../assets/Logo.svg";
import { useState } from "react";

const Header = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(false);
  }

  return (
    <header>
      <div className="header-wrapper">
        <div className="menu-icon-wrapper">
          <button
            className={isMenuOpen ? "close" : ""}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-controls=""
            aria-expanded={isMenuOpen}>
              <span className="menu-icon"></span>
          </button>
        </div>
        <div className="logo-wrapper">
          <img src={mainLogo} alt="Little Lemon logo" />
          <Link to="/" className="block-link"></Link>
        </div>
        <div className="basket-icon-wrapper">
          <button aria-label="Basket">
              <span className="basket-icon"></span>
          </button>
        </div>
      </div>
      {children(isMenuOpen, handleClick)}
    </header>
  );
};

export default Header;
