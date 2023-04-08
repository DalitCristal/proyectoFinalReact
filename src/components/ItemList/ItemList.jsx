//COMPONENTS
import Item from "../Item/Item";

//HOC
import { productConIva } from "../HocIva/HocIva";

//STYLES
import "./ItemList.css";

const ItemList = ({ products }) => {
  const NewPrice = productConIva(Item);

  return (
    <div className="containerProducts">
      {products.map((prod) => (
        <>
          <NewPrice key={prod.id} {...prod} />
        </>
      ))}
    </div>
  );
};

export default ItemList;
