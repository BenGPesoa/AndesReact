import React from 'react';
import '../../styles/components/layout/footer.css';

const Footer = (props) => {
    return (
        <div>
            <footer>
        <div class="footer1">
            <div class="datos">
                <h4>Andes instrumentos Ópticos srl.</h4>
                <h5>ruta 16 km 24,5 - Lago Puelo</h5>
                <h5>Chubut - Argentina</h5>
                <h6>(02948)498-157</h6>
            </div>
            <div class="social">
                {/* <div class="container iconos">
                    <div class="row fila">
                        <div class="col-4 sm"><a href="mailto:andesinstrumentos@gmail.com"><img src="img/email.png" width="150" alt="Email"></a></div>
                        <div class="col-4 sm"><a href="http://www.facebook.com/andesinstrumentos"><img src="img/facebook.png" width="100" alt="Facebook"></a></div>
                        <div class="col-4 sm"><a href="http://www.linkedin.com/andesinstrumentos"><img src="img/linkedin.png" width="100" alt="Linkedin"></a></div>                        
                    </div>
                    <div class="row">
                        <div class="col-4 sm"><a href="http://www.twitter.com/@andesinstrumentos"><img src="img/twitter.png" width="100" alt="Twitter"></a></div>
                        <div class="col-4 sm"><a href="http://www.instagram.com/andesinstrumentos"><img src="img/instagram.png" width="100" alt="Instagram"></a></div>
                        <div class="col-4 sm"><a href="https://api.whatsapp.com/send?phone=5492948498157"><img src="img/whatsapp.png" width="60" alt="whatsapp"></a></div>
                    </div>
                </div> */}


            </div>
            <div class="news">
                <h5>Suscribite a nuestro Newsletter</h5>
                <form action="">
                    <input type="text" name="nombre" class="itemNews" placeholder="Nombre" />
                    <input type="email" name="mail" class="itemNews" placeholder="Email" />
                    <textarea name="area"class="areaNews" placeholder="Mensaje"></textarea>
                    <button type="submit" class="btnEnviar">Enviar</button>
                </form>
            </div>
        </div>
        <div class="footer2">
            <p>Design by Ben Pesoa &copy; 2022</p>
        </div>
    </footer></div>
    );
};
export default Footer;