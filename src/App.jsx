import React from 'react';
import Menu from './components/Menu';
import Acerca_de from './components/Acerca_de';
import Proyecto from './components/Proyecto';
import Contacto from './components/Contacto'
import './css/App.sass'


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
        <div className="container" id="mis-proyectos">
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
        </div>
      </main>
      <section className="acerca-de" id='acerca-de'>
        <div className="container">
          <Acerca_de/>
        </div>
      </section>
      <footer>
        <div className="container" id="contactame">
          <Contacto/>
        </div>
      </footer>
      </>
    );
}

export default App;
