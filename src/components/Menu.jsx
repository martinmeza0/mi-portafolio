import React from 'react'
import '../css/_Menu.sass'
const Menu = () => {
    return (
        <>
            <nav>
                <input type="checkbox" id="check"/>
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <ul>
                    <li><a href="#mis-proyectos">Mis proyectos</a></li>
                    <li><a href="#acerca-de">Sobre mi</a></li>
                    <li><a href="#contactame">Contactame</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Menu
