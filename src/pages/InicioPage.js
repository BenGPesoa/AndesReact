import React from "react";
import { Link } from "react-router-dom";
import Carteles from "../components/Carteles";
import '../styles/components/pages/InicioPage.css';

const InicioPage = (props) => {
  return (
    <div>
      <div className="texto">
        <h3>
          Del 9 al 28 de Mayo Oferta especial Eclipse Lunar 10% OFF en
          Telescopios!
        </h3>
      </div>
      <div >
        <a href="productos/f4080.html">
          <div className="cartel">
            <Carteles numProducto="1" />
          </div>
        </a>
      </div>
      <div className="texto">
        <h3>15% OFF Contado Efectivo en Fundas & Accesorios</h3>
      </div>
      <div >
        <a href="productos/f4080.html">
          <div className="cartel">
            <Carteles numProducto="2" />
          </div>
        </a>
      </div>
      <div className="texto">
        <h3>12 Cuotas sin Interés</h3>
        <img src="img/tarjeta1.jpg" alt="tarjeta" />
        <img src="img/tarjeta2.jpg" alt="tarjeta" />
        <img src="img/tarjeta3.jpg" alt="tarjeta" />
        <img src="img/tarjeta4.jpg" alt="tarjeta" />
      </div>
      <div >
        <a href="productos/f4080.html">
          <div className="cartel">
            <Carteles numProducto="3" />
          </div>
        </a>
      </div>
    </div>
  );
};
export default InicioPage;
