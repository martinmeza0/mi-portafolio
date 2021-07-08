import React from 'react'
import '../css/_Contacto.sass'

const Contacto = () => {
    return (
        <>
            <section className="contacto">
                    <div className="container">
                        <h3>Contactame!</h3>
                        <img src="/assets/svg/undraw_Opened.svg" alt="" />
                    </div>
                    <form action="">
                        <input type="text" placeholder="Nombre"/>
                        <input type="email" placeholder="Correo"/>
                        <textarea placeholder="Mensaje"></textarea>
                        <input type="button" value="Enviar" />
                    </form>  
            </section>  

        </>
    )
}

export default Contacto
