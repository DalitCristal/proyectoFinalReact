//COMPONENTS
import Item from "../Item/Item";

//STYLES
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="containerProducts">
      {products.map((prod) => (
        <>
          <Item key={prod.id} {...prod} />
        </>
      ))}
    </div>
  );
};

export default ItemList;
