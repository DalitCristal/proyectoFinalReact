export const productConIva = (Componente) => {
  return function ({ id, name, price, img, stock, category, description }) {
    const newPrice = price * 1.21;
    return (
      <Componente
        price={newPrice}
        id={id}
        name={name}
        img={img}
        stock={stock}
        category={category}
        description={description}
      />
    );
  };
};
