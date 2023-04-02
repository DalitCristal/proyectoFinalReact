//STYLES
import "./ItemDetail.css";
//COMPONENTS
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  console.log(id);
  return (
    <article className="CardItem" id={id}>
      <h2>{name} </h2>
      <img src={img} alt={name} className="ItemImg" />
      <section>
        <p>Category: {category} </p>
        <p>Description: {description} </p>
        <p>Price: ${price} </p>
      </section>
      <ItemCount
        initial={1}
        stock={stock}
        onAdd={(quantity) => {
          console.log(`Cantidad Agregada: ${quantity}`);
        }}
      />
    </article>
  );
};

export default ItemDetail;
