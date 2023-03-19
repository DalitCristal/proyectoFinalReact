import CartWidget from "./NavCartWidget/CartWidget.jsx";
import "./NavBar.css";
import NavLogoContainer from "./NavLogo/NavLogoContainer.jsx";
import NavButtons from "./NavButtons/NavButtons.jsx";
import NavInput from "./NavInput/NavInput.jsx";

const NavBar = () => {
  return (
    <nav className="navBar">
      <NavLogoContainer />
      <NavButtons btnStart="abrigos" btnCenter="pantalones" btnEnd="remeras" />
      <NavInput />
      <CartWidget />
    </nav>
  );
};

export default NavBar;
