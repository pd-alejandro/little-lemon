import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
      <nav className={props.isOpen ? "open" : ""}>
        <ul>
          <li>
            <Link to="/" onClick={props.handleClick}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={props.handleClick}>About</Link>
          </li>
          <li>
            <Link to="/menu" onClick={props.handleClick}>Menu</Link>
          </li>
          <li>
            <Link to="/reservations" onClick={props.handleClick}>Reservations</Link>
          </li>
          <li>
            <Link to="/order" onClick={props.handleClick}>Order online</Link>
          </li>
          <li>
            <Link to="/login" onClick={props.handleClick}>Login</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
