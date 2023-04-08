//REACT ROUTER DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";

//COMPONENTS
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";

//PAGES
import Details from "./pages/Details.js";
import Home from "./pages/Home.js";
import Pants from "./pages/Pants.js";
import Coats from "./pages/Coats.js";
import Tshirts from "./pages/T-shirts.js";
import Error from "./pages/Error.js";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<Pants />} />
          <Route path="/category/:categoryId" element={<Coats />} />
          <Route path="/category/:categoryId" element={<Tshirts />} />
          <Route path="/item/:id" element={<Details />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

/* 
OBSERVACIONES:

* El home muestra sin problemas todo el catologo de productos
* /category/:category:id navega y te muestra respectivos productos pero no muestra las imagenes
* /item/:id navega con el id correspondiente pero no muestra en la card la informacion correspondiente
*/
