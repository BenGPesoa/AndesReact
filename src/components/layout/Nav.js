import React from 'react';

import { Link } from "react-router-dom";
 
const Nav = (props) => {
    return (
        <div>
        <nav>
        <ul>
            <li><link to="/">Inicio</link></li>
            <li><link to="/productos.html">Productos</link></li>
            <li><link to="/fabrica.html">Nuestra Fábrica</link></li>
            <li><link to="/efemerides.html">Efemérides Astronómicas</link></li>
            <li><link to="/galeria.html">Imágenes</link></li>
            <li><link to="/contacto.html">Contacto</link></li>
        </ul>
    </nav>
    </div>
    );
};
export default Nav;