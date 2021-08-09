import React from 'react';
import Menu from './components/Menu';
import AcercaDe from './components/AcercaDe';
import Proyecto from './components/Proyecto';
import Contacto from './components/Contacto';
import './css/App.sass';

function App() {
  return (
      <>
      <header>
        <Menu/>
        <div className="container">
          <div className="nombre-profesion">
            <h1>Martin Meza</h1>
            <h2>Desarrollador Web</h2>
          </div>
        </div>
      </header>
      <main>
        <article className="container" id="mis-proyectos">
          <Proyecto
            imagen='/assets/img/agenda de contacto.jpg'
            titulo="Agenda de contacto"
            categorias="HTML - CSS - JS"
            texto="Una agenda de contacto donde la informacion se guarda en el local storage, se integró la libreria sweetalert2 para los pop-ups"
            linkPag="https://martinmeza0.github.io/agenda-contacto/"
            linkCode="https://github.com/martinmeza0/agenda-contacto"
          />
          <Proyecto
            imagen='/assets/img/25Alfajores.jpg'
            titulo="25alfajores"
            categorias="HTML - SASS - JS"
            texto="Una pagina de comidas para un emprendimiento de alfajores artesanales, cuenta con un menu de precios y un carousel de fotos"
            linkPag="https://martinmeza0.github.io/blog-comida/"
            linkCode="https://github.com/martinmeza0/blog-comida"
          />
          <Proyecto
            imagen='/assets/img/Juego de memoria.jpg'
            titulo="Juego de memoria"
            categorias="HTML - CSS - JS"
            texto=" Un juego de cartas con el objetivo de encontrar el par de cartas; se toma en cuenta los movimientos acertados y los incorrecto, tambien incluye un cronometro que cuenta hasta que todas las cartas esten dadas vueltas"
            linkPag="https://martinmeza0.github.io/memory-game/"
            linkCode="https://github.com/martinmeza0/memory-game"
          />
        </article>
      </main>
      <section className="acerca-de" id='acerca-de'>
        <div className="container">
          <AcercaDe/>
        </div>
      </section>
      <footer>
        <div className="container" id="contactame">
          <Contacto/>
        </div>
         <div className="redes-sociales">
            <a href="https://www.linkedin.com/in/martin-meza-0640311b7/"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/martinmeza0"><i className="fab fa-github"></i></a>
        </div> 
      </footer>
      </>
    );
}

export default App;
