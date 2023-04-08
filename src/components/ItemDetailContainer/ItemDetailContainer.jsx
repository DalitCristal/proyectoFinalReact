//STYLES
import "./ItemDetailContainer.css";
//HOOKS
import { useEffect, useState } from "react";
//HOC
import { productConIva } from "../HocIva/HocIva.jsx";
//ASYNCMOCK
import { getProductById } from "../../asyncmock";
//COMPONENTS
import ItemDetail from "../ItemDetail/ItemDetail";
//REACT ROUTER DOM
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const NewPrice = productConIva(ItemDetail);
  return (
    <div className="ItemDetailContainer">
      <NewPrice {...product} />
    </div>
  );
};

export default ItemDetailContainer;
