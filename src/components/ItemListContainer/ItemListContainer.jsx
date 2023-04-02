//STYLES
import "./ItemListContainer.css";

//HOOKS
import { useState, useEffect } from "react";

//REACT ROUTER DOM
import { useParams } from "react-router-dom";

//SIMULACION DE API (lo voy a cambiar no va a quedar esto para el proecto final)
import { getProducts, getProductsByCategory } from "../../asyncmock";

//COMPONENTS
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting, subtitle }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
  }, [categoryId]);

  return (
    <>
      <h2 className="greeting">{greeting}</h2>
      <h3>{subtitle} </h3>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
