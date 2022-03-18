import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import './Proyect.scss'

const Proyect = ({information}) => {
  const { img, title, technology, description, linkDemo, linkCode } = information
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
      <div className='proyect'>
        <img src={img} alt='' onClick={() => setModalIsOpen(true)} />
      </div>

      <Modal open={modalIsOpen}>
        <div className='overlay' onClick={() => setModalIsOpen(false)}>
          <div className='Modal' onClick={(e) => e.stopPropagation()}>
            <header>
              <h3 className='title'>{title}</h3>
              <span className='close material-icons' onClick={() => setModalIsOpen(false)}>close</span>
            </header>
            <section className='body'>
              <img src={img} alt={title} />
              <p className='description' dangerouslySetInnerHTML={{ __html: description }} />
              <div className='card-container'>
                <span className='technology'>{technology} </span>
                <div className='link'>
                  {linkDemo ? <a href={linkDemo}>Demo<span className='material-icons'>play_arrow</span></a> : <></>}
                  <a href={linkCode}>Code<span className='material-icons'>code</span></a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Modal>

    </>
  )
}

export default Proyect
