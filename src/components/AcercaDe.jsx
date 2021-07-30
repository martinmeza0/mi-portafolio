import React from 'react';
import '../css/_Acerca_De.sass';
const AcercaDe = () => {
    return (
        <>
            <section className="informacion">
                <div className="info-1">
                    <h3>Sobre mi...</h3>
                    <p>Soy un <span>Desarrollador Front-end</span> de Argentina, apacionado por el diseño moderno, fluido y minimalista. Siempre tratando de resolver problemas.</p>
                </div>
                <img src="/assets/svg/undraw_feeling_proud.svg" alt="" />
                <div className="info-2">
                    <h4>...Cuando no estoy programando</h4>
                    <p>Soy una <span>persona autodidacta</span>, me gusta aprender algo nuevo todo los dias y como aplicarlas en mi rutina para mejorar mi calidad de vida.</p>
                </div>
            </section>
        </>
    )
}

export default AcercaDe
