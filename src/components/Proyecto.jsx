import React, {useState} from 'react'
import Modal from 'react-modal'
import '../css/_Proyecto.sass'

Modal.setAppElement('#root')

const Proyecto = (props) => {
    const {imagen, titulo, categorias, texto, linkPag, linkCode} = props 
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <>
            <div className="proyecto">
                <img src={imagen} alt="" onClick={() => setModalIsOpen(true)}/>
            </div>

            <Modal 
                isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} preventScroll={true} closeTimeoutMS={300}
                className="Modal" overlayClassName="Overlay" 
            >
                <section className="modal-container">
                    <div className="header">
                        <h3 className="titulo">{titulo}</h3>
                        <span class="borrar material-icons" onClick={() => setModalIsOpen(false)}>close</span>
                    </div>
                    <div className="body">
                        <img src={imagen} alt=""/>  
                        <p className="descripcion">{texto}</p>
                        <div className="card-container">
                            <p className="categorias">{categorias} </p>
                            <div className="link">
                                <a href={linkPag}>Demostracion <span class="material-icons">play_arrow</span></a>
                                <a href={linkCode}>Codigo <span class="material-icons">code</span></a>
                            </div>
                        </div>
                    </div>
                </section>
            </Modal>
        </>
    )
}

export default Proyecto
