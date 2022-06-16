import React from 'react';
import { Link } from "react-router-dom";
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <div className="fondoIndex">            
            <div className="fondo">
                <img src="img/fondo3.jpg" alt="Via Lactea" />
            </div>
            <div className="cerro">
                <img src="img/piltri.png" alt="Cerro" />
            </div>
            <div className="overText">
                <h1>Andes</h1>
                <h2>Instrumentos Opticos</h2>
                <h4><Link to="/inicio">Ingresar</Link></h4>
            </div>           
        </div>        
    );
};
export default HomePage;