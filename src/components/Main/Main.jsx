import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import Carousel from "./Carousel/Carousel.jsx";
import Button from "../Button/Button.jsx";
import ItemListContainer from "../ItemListContainer/ItemListContainer.jsx";
import "./Main.css";

function Main() {
  return (
    <div>
      <ItemListContainer greeting="Welcome to my brand!" />
      <div>
        <Carousel />
      </div>
      <div className="productCard">
        <ProductCard
          ProdutcName="Coat"
          ProductDetails="Corderoy jacket"
          ProductCant="5"
          ProductImg="./assetsProducts/abrigos"
        />
        <ProductCard
          ProdutcName="Pant"
          ProductDetails="Jean Pants"
          ProductCant="5"
          ProductImg="./assetsProducts/pantalones"
        />
        <ProductCard
          ProdutcName="Tshirt"
          ProductDetails="Cotton shirt"
          ProductCant="5"
          ProductImg="./assetsProducts/camisetas"
        />
      </div>
      <Button>See more</Button>
    </div>
  );
}

export default Main;
