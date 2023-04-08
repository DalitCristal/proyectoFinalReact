//STYLES
import "./Item.css";

//REACT ROUTER DOM
import { Link } from "react-router-dom";

const Item = ({ id, name, price, img, stock }) => {
  return (
    <article className="cardProducts">
      <h2> {name} </h2>
      <img src={img} alt={name} className="product-image" />
      <section>
        <p> Price with IVA: ${price}</p>
        <p> Availability: {stock} </p>
      </section>
      <Link to={`/item/${id}`} className="product-button">
        See details
      </Link>
    </article>
  );
};

export default Item;
