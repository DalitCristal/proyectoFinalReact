import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import Carousel from "./Carousel/Carousel.jsx";
import "./Main.css";

function Main() {
  return (
    <div>
      <div>
        <Carousel />
      </div>
      <div className="productCard">
        <ProductCard
          ProdutcName="Abrigo"
          ProductDetails="Campera de Corderoy"
          ProductCant="5"
          ProductImg="./assetsProducts/abrigos"
        />
        <ProductCard
          ProdutcName="Pantalon"
          ProductDetails="Pantalon de jean"
          ProductCant="5"
          ProductImg="./assetsProducts/pantalones"
        />
        <ProductCard
          ProdutcName="Camiseta"
          ProductDetails="Camiseta de algodón"
          ProductCant="5"
          ProductImg="./assetsProducts/camisetas"
        />
      </div>
    </div>
  );
}

export default Main;
