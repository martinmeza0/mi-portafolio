import React, {useState} from 'react'
import Modal from 'react-modal'
import '../css/_Proyecto.sass'

Modal.setAppElement('#root')

const Proyecto = (props) => {
    const {imagen, titulo, categorias, texto, linkPag, linkCode} = props 
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <>
            <div className="proyecto" onClick={() => setModalIsOpen(true)}>
                <h3 className="titulo">{titulo}</h3>
                <img src={imagen} alt="" />
            </div>

            <Modal 
                isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} preventScroll={true} closeTimeoutMS={300}
                className="Modal" overlayClassName="Overlay" 
            >
                
                <div className="card__body">
                    <span class="borrar material-icons" onClick={() => setModalIsOpen(false)}>close</span>
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
            </Modal>
        </>
    )
}

export default Proyecto
