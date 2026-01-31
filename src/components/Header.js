import { Link } from "react-router-dom";
import mainLogo from "../assets/Logo.svg"

const Header = ({children}) => {
  return (
    <header>
      <div className="logo-wrapper">
        <img src={mainLogo} alt="Little Lemon logo" />
        <Link to="/" className="block-link"></Link>
      </div>
      { children }
    </header>
  );
};

export default Header;
