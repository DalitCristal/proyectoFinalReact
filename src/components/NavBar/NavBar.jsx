import CartWidget from "./NavCartWidget/CartWidget.jsx";
import "./NavBar.css";
import NavLogoContainer from "./NavLogo/NavLogoContainer.jsx";
import NavInput from "./NavInput/NavInput.jsx";
import Button from "../Button/Button.jsx";

const NavBar = () => {
  return (
    <nav className="navBar">
      <NavLogoContainer />

      <ul className="buttons">
        <li>
          <Button>coats</Button>
        </li>
        <li>
          <Button>pants</Button>
        </li>
        <li>
          <Button>t-shirts</Button>
        </li>
      </ul>

      <NavInput />
      <CartWidget />
    </nav>
  );
};

export default NavBar;
