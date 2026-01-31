import { Link } from "react-router-dom";
import mainLogo from "../assets/Logo.svg";
import hamburgerIcon from "../assets/hamburger.svg";
import basketIcon from "../assets/basket.svg";
import { useEffect, useState } from "react";

// function useViewport() {
//   const [vw, setVw] = useState(window.innerHeight);

//   useEffect(() => {
//     const handleResize = () => setVw(window.innerWidth);
//     window.addEventListener("resize", handleResize);

//     return window.removeEventListener("resize", handleResize);
//   }, []);

//   return vw;
// }

const Header = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-wrapper">
        <div className="menu-icon">
          <button
            className={isMenuOpen ? "close" : ""}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-controls=""
            aria-expanded={isMenuOpen}>
            <img src={hamburgerIcon} alt="" />
          </button>
        </div>
        <div className="logo-wrapper">
          <img src={mainLogo} alt="Little Lemon logo" />
          <Link to="/" className="block-link"></Link>
        </div>
        <div className="basket-icon">
          <button>
            <img src={basketIcon} alt="" />
          </button>
        </div>
      </div>
      {children(isMenuOpen)}
    </header>
  );
};

export default Header;
