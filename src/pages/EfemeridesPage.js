import React from "react";
import "../styles/components/pages/EfemeridesPage.css";

const EfemeridesPage = (props) => {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const d = new Date();
  let mes = meses[d.getMonth()];
  let anio = d.getFullYear();

  // function impFecha() {
  //     var mesFecha = document.getElementById("mes");
  //     mesFecha.innerText = mes;
  //     var anioFecha = document.getElementById("anio");
  //     anioFecha.innerText = anio;
  // };

  // impFecha();

  return (
    <div className="efemerides">
      <div className="introPaginas">
        <h3>Efemérides Astronómicas del mes</h3>
        <p>
          Estas efemérides han sido elaboradas cuidadosamente por el Área de
          Divulgación Científica del Planetario de la Ciudad de Buenos Aires. El
          criterio adoptado ha sido destacar, especialmente, los fenómenos
          astronómicos fácilmente observables a simple vista, o con largavistas
          y pequeños telescopios, desde nuestra ciudad (y generalmente en toda
          la Argentina) durante este mes, con las fechas y horas indicadas.{" "}
        </p>
      </div>
      <div className="mesActual">
        <div id="mes">{mes}</div>
        <div id="anio">{anio}</div>
      </div>
      <div className="novedades">
        <h3>16 de Junio</h3>
        <p>
          Durante el crepúsculo matutino, Mercurio alcanza su máxima elongación:
          se ubica a 23.2° al oeste del Sol. El pequeño planeta podrá observarse
          una hora antes de la salida del Sol, a unos 10º sobre el horizonte
          este-noreste. Una buena oportunidad para identificarlo a simple vista,
          y verlo con telescopios. (7:00 hs)
        </p>
        <img src="img/novedades/16junio.png" alt="16junio" />
      </div>
      <div className="novedades">
        <h3>18 de Junio</h3>
        <p>
          Durante la madrugada, Saturno se ubica a 7º al este-noreste de la
          Luna. No es una conjunción compacta, pero aún así puede resultar de
          interés para identificar al planeta a simple vista (1:00 hs)
        </p>
        <img src="img/novedades/18junio.png" alt="18junio" />
      </div>
      <div className="novedades">
        <h3>21 de Junio</h3>
        <p>
          Solsticio de Invierno: a las 6:14 de la mañana (hora argentina)
          comienza la estación en el hemisferio sur (y el verano en el
          hemisferio norte). El Sol alcanza su mayor declinación norte (+23.5º),
          y su menor altura en nuestros cielos: al mediodía, en Buenos Aires y
          alrededores, nuestra estrella transita a tan sólo 32° de altura sobre
          el horizonte norte. Sale por el noreste a las 8:00 hs, y se oculta por
          el noroeste a las 17:50 hs (ambos horarios correspondientes a Buenos
          Aires). El Sol permanece apenas 9 horas y 50 minutos por encima del
          horizonte (y más de 14 por debajo). En términos de iluminación solar,
          es el día más corto del año para el hemisferio austral.
        </p>
        <p>
          En la alta madrugada, Júpiter se ubica 4º al noreste de la Luna. Una
          conjunción ideal para disfrutar a simple vista y, especialmente, con
          binoculares (5:00 hs){" "}
        </p>
        <img src="img/novedades/21junio.png" alt="21junio" />
      </div>
      <div className="novedades">
        <h3>22 de Junio</h3>
        <p>
          Otra bonita conjunción en el cielo de la madrugada: el rojizo Marte se
          verá 4,5º al este-noreste de la Luna. Un encuentro aparente para
          contemplar a simple vista y con binoculares (5:00 hs)
        </p>
        <img src="img/novedades/22junio.png" alt="22junio" />
      </div>
      <div className="novedades">
        <h3>26 de Junio</h3>
        <p>
          Antes del amanecer, la Luna y Venus protagonizan una impactante
          conjunción en el cielo oriental. Ambos aparecen a solo 4º uno del
          otro. Por si fuera poco, no muy lejos de ellos también veremos al
          famoso cúmulo estelar de Las Pléyades, a la rojiza estrella Aldebarán,
          y al planeta Mercurio. En suma: una escena astronómica de lo más
          variada. (7:00 hs){" "}
        </p>
        <img src="img/novedades/26junio.png" alt="26junio" />
      </div>

      {/* <div className="fasesLuna">
        <h3>Estas son las fases de la luna de este mes</h3>
        <iframe src="https://www.tutiempo.net/s-widget/moon/000000l1s/" scrolling="no" frameborder="0"
            style="border:none; overflow:hidden; width:600px; height:737px;"></iframe>
    </div> */}
    </div>
  );
};
export default EfemeridesPage;
