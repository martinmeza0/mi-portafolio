import React from 'react';
import Menu from './components/Menu';
import AcercaDe from './components/AcercaDe';
import Proyecto from './components/Proyecto';
import Contacto from './components/Contacto'
import './css/App.sass'


function App() {
  // history.replaceState(stateObj, '', 'bar2.html')
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
            imagen='/assets/img/agenda.jpg'
            titulo="Agenda de contacto"
            categorias="HTML - CSS - JS"
            texto=" Donec iaculis, ligula vitae viverra aliquet, massa mi dapibus leo, id ullamcorper velit purus vel dui. Proin tempor blandit leo vel suscipit. Nam vel eros a leo sagittis volutpat in auctor risus. Mauris ultricies sem fringilla quam facilisis, at convallis erat euismod. "
            linkPag="https://martinmeza0.github.io/agenda-contacto/"
            linkCode="https://github.com/martinmeza0/agenda-contacto"
          />
          <Proyecto
            imagen='/assets/img/agenda.jpg'
            titulo="Agenda de contacto"
            categorias="HTML - CSS - JS"
            texto="una agenda de contacto, la informacion se guarda en el local storage del navegador"
            linkPag="https://martinmeza0.github.io/agenda-contacto/"
            linkCode="https://github.com/martinmeza0/agenda-contacto"
          />
          <Proyecto
            imagen='/assets/img/agenda.jpg'
            titulo="Agenda de contacto"
            categorias="HTML - CSS - JS"
            texto="una agenda de contacto, la informacion se guarda en el local storage del navegador"
            linkPag="https://martinmeza0.github.io/agenda-contacto/"
            linkCode="https://github.com/martinmeza0/agenda-contacto"
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
