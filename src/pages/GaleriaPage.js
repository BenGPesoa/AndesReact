import React from 'react';
import '../styles/components/pages/GaleriaPage.css';
// import '../styles/components/layout/lightbox.min.css';

const GaleriaPage = (props) => {
    return (
        <div className='galeriaPagina'>
            <div className="introPaginas">
            <h3>Galeria de imágenes</h3>
            </div>
            <div className="pics">
            <a target="blank" href="img/galeria/img1.jpg" data-lightbox ="galeria" data-title="Jupiter y Europa - Agosto 2020" data-alt="Jupiter"><img className="galeriaChica" src="img/galeria/img1.jpg" /></a>
            <a target="blank" href="img/galeria/img2.jpg" data-lightbox ="galeria" data-title="Los Pilares de la Creación - Enero 2015" data-alt=""><img className="galeriaChica" src="img/galeria/img2.jpg" /></a>
            <a target="blank" href="img/galeria/img3.jpg" data-lightbox ="galeria" data-title="Galaxia NGC 2525 - Octubre 2020" data-alt=""><img className="galeriaChica" src="img/galeria/img3.jpg" /></a>
            <a target="blank" href="img/galeria/img4.jpg" data-lightbox ="galeria" data-title="Cúmulo de estrellas - Octubre 2007" data-alt=""><img className="galeriaChica" src="img/galeria/img4.jpg" /></a>
            <a target="blank" href="img/galeria/img5.jpg" data-lightbox ="galeria" data-title="La Nébula Burbuja - Mayo 2017" data-alt=""><img className="galeriaChica" src="img/galeria/img5.jpg" /></a>
            <a target="blank" href="img/galeria/img6.jpg" data-lightbox ="galeria" data-title="Nebula del Caballo - Abril 2013" data-alt=""><img className="galeriaChica" src="img/galeria/img6.jpg" /></a>
            <a target="blank" href="img/galeria/img7.jpg" data-lightbox ="galeria" data-title="La Forja Estelar - Diciembre 2020" data-alt=""><img className="galeriaChica" src="img/galeria/img7.jpg" /></a>
            <a target="blank" href="img/galeria/img8.jpg" data-lightbox ="galeria" data-title="Galaxia Sombrero" data-alt=""><img className="galeriaChica" src="img/galeria/img8.jpg" /></a>
            <a target="blank" href="img/galeria/img9.jpg" data-lightbox ="galeria" data-title="Nebula Cangrejo" data-alt=""><img className="galeriaChica" src="img/galeria/img9.jpg" /></a>
            
            <p>Haga click en las imagenes para ampliar.</p>
        </div>
        </div>    
    
    );
};
export default GaleriaPage;