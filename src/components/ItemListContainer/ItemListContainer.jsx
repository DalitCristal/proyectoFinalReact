import React from "react";
import "./Item.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="greeting">
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
