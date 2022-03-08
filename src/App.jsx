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
            imagen='/assets/img/Luxury Cars.jpg'
            titulo="Luxury Cars - The cars ecommerce"
            categorias="REACT - STYLED COMPONENTS"
            texto="Built in React and Styled Components with dependencies like react-router-dom and the Google Maps API.
            The proyect is a cars ecommerce with four pages: the main page with the list of cars to buy, the single view of each cars, an informative or faq page, an error404 page
            This proyect have a image carousel and options to choose the color of the vehicle.
            The proyect also is responsive design."
            linkPag="https://martinmeza0.github.io/luxurycars/"
            linkCode="https://github.com/martinmeza0/luxurycars"
          />

          <Proyecto
            imagen='/assets/img/Martin Meza portafolio.jpg'
            titulo="Portafolio de Martin Meza"
            categorias="SASS - REACT"
            texto="Mi portafolio web creado en react, con dependencias como emailjs para reenviar mensajes a mi email y react-hook-form para el formulario de contacto, se usó react portal para la ventana modal"
            linkPag=""
            linkCode="https://github.com/martinmeza0/mi-portafolio"
          />
          <Proyecto
            imagen='/assets/img/Agenda de contacto.jpg'
            titulo="Agenda de contacto"
            categorias="HTML - CSS - JS"
            texto="Una agenda de contacto donde la informacion se guarda en el local storage, se integró la libreria sweetalert2 para los pop-ups, el contenido guardado se puede borrar"
            linkPag="https://martinmeza0.github.io/agenda-contacto/"
            linkCode="https://github.com/martinmeza0/agenda-contacto"
          />
          <Proyecto
            imagen='/assets/img/25Alfajores.jpg'
            titulo="25Alfajores Grocery Store"
            categorias="HTML - SASS - JS"
            texto="Una Single Page de comidas para un emprendimiento de alfajores artesanales, cuenta con un menu de precios y un carousel de fotos (Glider.js)"
            linkPag="https://martinmeza0.github.io/blog-comida/"
            linkCode="https://github.com/martinmeza0/blog-comida"
          />
          <Proyecto
            imagen='/assets/img/Juego de memoria.jpg'
            titulo="Memory Game"
            categorias="HTML - CSS - JS"
            texto=" Memory game built in HTML CSS JavaScript. The proyect had a count of errors and successful plays. When the player press the button the game start and the chronometer start to count until the player win the game."
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
            <a href="https://www.linkedin.com/in/martin-meza-0640311b7/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/martinmeza0" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        </div> 
      </footer>
      </>
    );
}

export default App;
