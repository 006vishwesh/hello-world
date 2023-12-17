import { LOGO_URL } from "../utils.js/constants";

const Header = () => {
    return (
      <div className="Heading">
        <div className="logo-container">
          <img
            className="logo"
            alt="logo"
            src= {LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;