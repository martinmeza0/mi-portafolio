import React, {useState, useEffect} from 'react';
import '../css/_Proyecto.sass';
import Modal from './Modal';

const Proyecto = (props) => {
    const {imagen, titulo, categorias, texto, linkPag, linkCode} = props 
    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    useEffect(() => {
        document.addEventListener('click', Modal)
        return () => {
          document.removeEventListener('click', Modal);
        }
    })
    return (
        <>
            <div className="proyecto">
                <img src={imagen} alt="" onClick={() => setModalIsOpen(true)}/>
            </div>

            <Modal open={modalIsOpen}>
                <div className="overlay" onClick={() => setModalIsOpen(false)}>
                    <div className="Modal" onClick={(e) => e.stopPropagation()}>
                        <section className="header">
                            <h3 className="titulo">{titulo}</h3>
                            <span className="borrar material-icons" onClick={() => setModalIsOpen(false)}>close</span>
                        </section>
                        <section className="body">
                            <img src={imagen} alt=""/>  
                            <p className="descripcion">{texto}</p>
                            <div className="card-container">
                                <p className="categorias">{categorias} </p>
                                <div className="link">
                                    <a href={linkPag}>Demostracion <span className="material-icons">play_arrow</span></a>
                                    <a href={linkCode}>Codigo <span className="material-icons">code</span></a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Modal>

        </>
    )
}

export default Proyecto
