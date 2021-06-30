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
                
                
                <div className="card__header">
                    <h3 className="card__title">{titulo}</h3>
                    <span class="borrar material-icons" onClick={() => setModalIsOpen(false)}>close</span>
                </div>
                <div className="card__body">
                    <img src={imagen} alt=""/>  
                    <p className="card__text">{texto}</p>
                    <h6 className="card__categories">{categorias}</h6>
                    <a href={linkPag}>Ir a la pagina</a>
                    <a href={linkCode}>Ir al codigo</a>
                </div>
            </Modal>
        </>
    )
}

export default Proyecto
