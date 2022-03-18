import React from 'react'
import './Navbar.scss'
const Navbar = () => {
  return (
    <>
      <nav>
        <input type='checkbox' id='check' />
        <label htmlFor='check' className='checkbtn'>
          <i className='fas fa-bars' />
        </label>
        <ul>
          <li><a href='#proyects'>My work</a></li>
          <li><a href='#aboutme'>About me</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
