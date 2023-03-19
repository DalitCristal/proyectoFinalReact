import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import "./Main.css";
import "./ProductCard/assetsProducts/abrigos/01.jpg";

function Main() {
  return (
    <div className="productCard">
      <ProductCard
        ProdutcName="Abrigo"
        ProductDetails="Campera de Corderoy"
        ProductCant={5}
        ProductImg="www.google.com"
      />
    </div>
  );
}

export default Main;
