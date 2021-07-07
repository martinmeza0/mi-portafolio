import React from 'react'
import '../css/_Contacto.sass'

const Contacto = () => {
    return (
        <>
            <section className="contacto">
                    <div className="container">
                        <h3>Contactame!</h3>
                        <img src="/assets/svg/undraw_Opened.svg" alt="" />
                        {/* <div className="redes-sociales">
                            <i class="fab fa-linkedin-in"><a href="#"></a></i>
                            <i class="fab fa-github"><a href="#"></a></i>
                        </div>  */}
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
