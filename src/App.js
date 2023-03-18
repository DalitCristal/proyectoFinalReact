import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a E-commerce!"} />
    </div>
  );
};

export default App;
