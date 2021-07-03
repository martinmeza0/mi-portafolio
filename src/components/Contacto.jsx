import React from 'react'
import '../css/_Contacto.sass'

const Contacto = () => {
    return (
        <>
            <section className="contacto">
                <h3>Contactame!</h3>
                <div className="form-container">
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-github"></i>
                    <form action="">
                        <input type="text" placeholder="Nombre"/>
                        <input type="email" placeholder="Correo"/>
                        <textarea placeholder="Mensaje"></textarea>
                        <input type="button" value="Enviar" />
                    </form>  
                </div>  
            </section>  

        </>
    )
}

export default Contacto
