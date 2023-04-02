//STYLES
import "./NavBar.css";

//REACT ROUTER DOM
import { Link } from "react-router-dom";

//COMPONENTS
import Button from "../Button/Button.jsx";
import CartWidget from "../NavCartWidget/CartWidget";
import NavInput from "../NavInput/NavInput.jsx";
import NavLogoContainer from "../NavLogo/NavLogoContainer.jsx";

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to="/">
        <NavLogoContainer />
      </Link>
      <ul className="buttons">
        <Link to="/">
          <Button className="btnNav" children="home" />
        </Link>
        <Link to="/category/coats">
          <Button className="btnNav" children="coats" />
        </Link>
        <Link to="/category/pants">
          <Button className="btnNav" children="pants" />
        </Link>
        <Link to="/category/tshirts">
          <Button className="btnNav" children="t-shirts" />
        </Link>
      </ul>

      <NavInput />
      <CartWidget />
    </nav>
  );
};

export default NavBar;
