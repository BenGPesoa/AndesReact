import React from 'react';
import { Link } from "react-router-dom";
import Carteles from '../components/Carteles';

const InicioPage = (props) => {
    return (
        <div>
            <h1>Inicio pagina</h1>
            <Carteles numProducto="1" />
            <Carteles numProducto="2" />
            <Carteles numProducto="3" />
            
        </div>    
    
    );
};
export default InicioPage;