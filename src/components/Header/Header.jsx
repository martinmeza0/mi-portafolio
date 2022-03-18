import Navbar from '../Navbar/Navbar'
import './Header.scss'

const Header = () => {
  return (
    <>
      <header className='main_header'>
        <Navbar />
        <div className='container'>
          <div className='name_profesion'>
            <h1>Martin Meza</h1>
            <h2>Frontend Developer</h2>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
