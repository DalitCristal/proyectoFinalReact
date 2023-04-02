import cart from "./cart.svg";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={cart} alt="cart-widget" />
      <span>0</span>
    </div>
  );
};

export default CartWidget;
