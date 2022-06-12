import React from 'react';

import { Link } from "react-router-dom";
 
const Nav = (props) => {
    return (
        <div>
          <ul>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='productos'>Productos</Link></li>
            <li><Link to='fabrica'>Nuestra Fábrica</Link></li>
            <li><Link to='efemerides'>Efemérides Astronómicas</Link></li>
            <li><Link to='galeria'>Imágenes</Link></li>
            <li><Link to='contacto'>Contacto</Link></li>
          </ul>
        </div>
    );
};
export default Nav;