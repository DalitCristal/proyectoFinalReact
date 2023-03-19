import React from "react";
import "./App.css";

//COMPONENTS
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Main from "./components/Main/Main.jsx";

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Main />
    </div>
  );
};

export default App;
