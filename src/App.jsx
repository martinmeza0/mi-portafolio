import React from 'react'
import './styles/App.scss'
import Header from './components/Header/Header'
import ProyectList from './components/ProyectList/ProyectList'
import AboutMe from './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
function App () {
  return (
    <>
      <Header />
      <main className='container'>
        <ProyectList></ProyectList>
        <AboutMe></AboutMe>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
