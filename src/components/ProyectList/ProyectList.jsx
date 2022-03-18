import React from 'react'
import Proyect from '../Proyect/Proyect'
import { MyProyects } from '../../MyProyects'
import './ProyectList.scss'

const ProyectList = () => {
  console.log(MyProyects)
  return (
    <>
      <section className="proyect-container" id="proyects">
        {MyProyects.map(proyect => 
          <Proyect key={MyProyects.indexOf(proyect)} information={proyect} />
        )}
      </section>
    </>
  )
}

export default ProyectList
