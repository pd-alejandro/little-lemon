import mainLogo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <img src={mainLogo} alt="Little Lemon logo" />
        </div>
        <div className="footer-links">
          <div>
            <h3>Categorie</h3>
            <ul>
              <li>
                <a href="">Item</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Categorie</h3>
            <ul>
              <li>
                <a href="">Item</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Categorie</h3>
            <ul>
              <li>
                <a href="">Item</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
