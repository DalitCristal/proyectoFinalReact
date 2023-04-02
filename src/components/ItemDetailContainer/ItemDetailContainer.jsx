//STYLES
import "./ItemDetailContainer.css";
//HOOKS
import { useEffect, useState } from "react";
//ASYNCMOCK
import { getProductById } from "../../asyncmock";
//COMPONENTS
import ItemDetail from "../ItemDetail/ItemDetail";
//REACT ROUTER DOM
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
