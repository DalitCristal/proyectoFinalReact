import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>E-commerce</h3>
      <div>
        <button>Buzos</button>
        <button>Pantalones</button>
        <button>Remeras</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
