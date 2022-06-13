import React from "react";
import { Link } from "react-router-dom";

const Carteles = (props) => {
  const srcProducto = `img/productos/cartel${props.numProducto}a.jpg`;
  const srcInfo = `img/productos/cartel${props.numProducto}.jpg`;
  return (
    <picture>
      <img src={srcInfo} />
      <img src={srcProducto} />
    </picture>
  );
};

export default Carteles;
