import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="counter">
      <div className="controls">
        <button className="btn" onClick={decrement}>
          -
        </button>

        <p className="number">{quantity}</p>
        <button className="btn" onClick={increment}>
          +
        </button>
      </div>

      {
        <div>
          <button
            className="btn"
            onClick={() => onAdd(quantity)}
            disable={!stock}
          >
            Agregar al carrito
          </button>
        </div>
      }
    </div>
  );
};

export default ItemCount;

/* 
import "./ItemCount.jsx";
import { useState } from "react";
import Button from "../Button/Button.jsx";

const ItemCount = ({ initial, stock }) => {
  const [contador, setContador] = useState(initial);

  const increment = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrement = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  };

  const addToCartShopping = () => {
    console.log(`Agregó ${contador} items al carrito`);
  };

  return (
    <>
      <Button onClick={increment} className="btn" children="+" />
      <p>{contador}</p>
      <Button onClick={decrement} className="btn" children="-" />
      <Button
        onClick={addToCartShopping}
        className="btn"
        children="Agregar al carrito"
      />
    </>
  );
};

export default ItemCount;
 */
