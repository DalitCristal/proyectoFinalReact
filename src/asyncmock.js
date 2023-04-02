const products = [
  {
    id: 1,
    name: "campera inflable",
    price: 1000,
    category: "coats",
    img: "./assetsProducts/Abrigos/01.jpg",
    stock: 10,
    description: "Muy abrigada",
  },
  {
    id: 2,
    name: "campera inflable",
    price: 1500,
    category: "coats",
    img: "./assetsProducts/Abrigos/02.jpg",
    stock: 32,
    description: "Muy abrigada",
  },
  {
    id: 3,
    name: "campera inflable",
    price: 1050,
    category: "coats",
    img: "./assetsProducts/Abrigos/03.jpg",
    stock: 12,
    description: "Muy abrigada",
  },
  {
    id: 4,
    name: "campera inflable",
    price: 1550,
    category: "coats",
    img: "./assetsProducts/Abrigos/04.jpg",
    stock: 29,
    description: "Muy abrigada",
  },
  {
    id: 5,
    name: "campera inflable",
    price: 1055,
    category: "coats",
    img: "./assetsProducts/Abrigos/05.jpg",
    stock: 20,
    description: "Muy abrigada",
  },
  {
    id: 6,
    name: "jeans pants",
    price: 1000,
    category: "pants",
    img: "./assetsProducts/pantalones/01.jpg",
    stock: 10,
    description: "Son pantalones de ropa casual",
  },
  {
    id: 7,
    name: "jeans pants",
    price: 1500,
    category: "pants",
    img: "./assetsProducts/pantalones/02.jpg",
    stock: 32,
    description: "Son pantalones de ropa casual",
  },
  {
    id: 8,
    name: "jeans pants",
    price: 1050,
    category: "pants",
    img: "./assetsProducts/pantalones/03.jpg",
    stock: 12,
    description: "Son pantalones de ropa casual",
  },
  {
    id: 9,
    name: "jeans pants",
    price: 1550,
    category: "pants",
    img: "./assetsProducts/pantalones/04.jpg",
    stock: 29,
    description: "Son pantalones de ropa casual",
  },
  {
    id: 10,
    name: "jeans pants",
    price: 1055,
    category: "pants",
    img: "./assetsProducts/pantalones/05.jpg",
    stock: 20,
    description: "Son pantalones de ropa casual",
  },
  {
    id: 11,
    name: "cotton shirt",
    price: 1000,
    category: "tshirts",
    img: "./assetsProducts/camisetas/01.jpg",
    stock: 10,
    description: "Muy cómodas",
  },
  {
    id: 12,
    name: "cotton shirt",
    price: 1500,
    category: "tshirts",
    img: "./assetsProducts/camisetas/02.jpg",
    stock: 32,
    description: "Muy cómodas",
  },
  {
    id: 13,
    name: "cotton shirt",
    price: 1050,
    category: "tshirts",
    img: "./assetsProducts/camisetas/03.jpg",
    stock: 12,
    description: "Muy cómodas",
  },
  {
    id: 14,
    name: "cotton shirt",
    price: 1550,
    category: "tshirts",
    img: "./assetsProducts/camisetas/04.jpg",
    stock: 29,
    description: "Muy cómodas",
  },
  {
    id: 15,
    name: "cotton shirt",
    price: 1055,
    category: "tshirts",
    img: "./assetsProducts/camisetas/05.jpg",
    stock: 20,
    description: "Muy cómodas",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
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
    }, 500);
  });
};
