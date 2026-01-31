import mainLogo from "../assets/Logo.svg"

const Header = ({children}) => {
  return (
    <header>
      <div>
        <img src={mainLogo} alt="Little Lemon logo" />
      </div>
      { children }
    </header>
  );
};

export default Header;
