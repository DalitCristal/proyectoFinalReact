const products = [
  {
    id: "1",
    name: "Campera inflable",
    price: 1000,
    category: "Coats",
    img: "../assetsProducts/Abrigos/01.jpg",
    stock: 10,
    description: "Muy abrigada, ideal para temporada de invierno",
  },
  {
    id: "2",
    name: "Campera de Algodón",
    price: 1500,
    category: "Coats",
    img: "../assetsProducts/Abrigos/02.jpg",
    stock: 32,
    description:
      "Clásica negra, de Algodón frizado manga rangle. Excelente calidad",
  },
  {
    id: "3",
    name: "Campera De Neoprene",
    price: 1050,
    category: "Coats",
    img: "../assetsProducts/Abrigos/03.jpg",
    stock: 12,
    description:
      "Color negro, diseño de la tela Liso, Temporada de lanzamiento Otoño/Invierno, tiene 3 bolsillos, es térmica, Tenemos la mejor calidad al mejor Precio",
  },
  {
    id: "4",
    name: "Campera de guata inflada",
    price: 1550,
    category: "Coats",
    img: "../assetsProducts/Abrigos/04.jpg",
    stock: 29,
    description:
      "Tela ''Siré matelaseado'', Con capucha, Bolsillos laterales con cierre, Cierre delantero, Es uno de los esenciales masculinos que no pueden faltar en tu guardarropa, Excelente calce, calidad y confección, Ideal en veranito para cualquier evento u ocasión",
  },
  {
    id: "5",
    name: "Camperas térmicas neoprene",
    price: 1055,
    category: "Coats",
    img: "../assetsProducts/Abrigos/05.jpg",
    stock: 20,
    description:
      "Térmica, interior micropolar, impermeable, buenas terminaciones, capucha desmontable, velcro en mangas",
  },
  {
    id: "6",
    name: "Blue air jeans",
    price: 1000,
    category: "Pants",
    img: "../assetsProducts/pantalones/01.jpg",
    stock: 10,
    description:
      "Pantalón Chino, Gabardina rígida, excelente calidad, Corte Intermedio",
  },
  {
    id: "7",
    name: "Pantalón clásico con pinzas",
    price: 1500,
    category: "Pants",
    img: "../assetsProducts/pantalones/02.jpg",
    stock: 32,
    description:
      "Pantalones de ropa casual, Gabardina importada, excelente calidad, Varios Colores y Talles, Corte Pinzado",
  },
  {
    id: "8",
    name: " Pantalon Jean Elastizado",
    price: 1050,
    category: "Pants",
    img: "../assetsProducts/pantalones/03.jpg",
    stock: 12,
    description:
      "Recorte Slim, Tela Denim 9 oz con Lycra, Cartera con cierre, Uso General, Unisex (Hombre / Mujer)",
  },
  {
    id: "9",
    name: "Pantalon chino",
    price: 1550,
    category: "Pants",
    img: "../assetsProducts/pantalones/04.jpg",
    stock: 29,
    description:
      " Angosto de hombre, Confeccionado en Gabardina elastizada de alta calidad",
  },
  {
    id: "10",
    name: "Jean Elastizado",
    price: 1055,
    category: "Pants",
    img: "../assetsProducts/pantalones/05.jpg",
    stock: 20,
    description:
      "Tiro medio, Temporada de lanzamiento Primavera/Verano, Corte del pantalón Recto Slim, con bolsillos",
  },
  {
    id: "11",
    name: "Remera de Algodón",
    price: 1000,
    category: "t-shirts",
    img: "../assetsProducts/camisetas/01.jpg",
    stock: 10,
    description:
      "Tela Algodón Jersey 24/1 y 30/1 Peinado, Cuello Ribb redondo, Detalles Tapacostura a tono Tirillera de hombro a hombro, Terminaciones costura en hilo de algodón reforzado a tono.",
  },
  {
    id: "12",
    name: "Remera Tropical Paradise",
    price: 1500,
    category: "t-shirts",
    img: "../assetsProducts/camisetas/02.jpg",
    stock: 32,
    description:
      "Tela de primera calidad, Algodón 100% jersey 24/1 de textura suave y liviana. Toda la prenda se arma en Overlock de 4 hilos reforzando costuras de seguridad. Cuello de Reeb fino al tono. Tirillera con hilos de Algodón. Remera manga corta con cuello redondo. Corte UNISEX.",
  },
  {
    id: "13",
    name: "Remera Pampero",
    price: 1050,
    category: "t-shirts",
    img: "../assetsProducts/camisetas/03.jpg",
    stock: 12,
    description:
      "Costuras Reforzadas en Mangas, Hombros y Sisa, Calidad Premium Garantizada, No se encoge, No destiñe, Uso General, Unisex ( Hombre / Mujer )",
  },
  {
    id: "14",
    name: "Remera names",
    price: 1550,
    category: "t-shirts",
    img: "../assetsProducts/camisetas/04.jpg",
    stock: 29,
    description:
      "Remera de jersey, escote redondo. Levemente entallada en la cintura. Con estampa frontal, Composición: 100% Algodón ",
  },
  {
    id: "15",
    name: "Remera Saona",
    price: 1055,
    category: "t-shirts",
    img: "../assetsProducts/camisetas/05.jpg",
    stock: 20,
    description:
      "Remera de jersey, escote en V. Levemente entallada en la cintura. Con estampa de marca y talle. Composición: 85% ALGODÓN-15% VISCOSA",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (productsCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === productsCategory));
    }, 2000);
  });
};
