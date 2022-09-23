import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../img/logo.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='div-contacts'>
            <p>
              <i className="bi bi-whatsapp"></i>
              WhatsApp:
              <span> (11) 94745-7110</span>
            </p>
            <p>
              <i className="bi bi-envelope"></i>
              Email comercial: 
              <span> mv.consultoriaelegalizacao@outlook.com</span>
            </p>
        </div>
        <div className='div-links-page'>
          <Link to='/'>
            <img src={Logo} alt="Logo" className='logo' />
          </Link>
            <ul>
                <li className='links'><Link to='/'>Home</Link></li>
                <li className='links'><Link to='/contact'>Fale Conosco</Link></li>
                <li className='links'><Link to='/services'>Serviços</Link></li>
                <li className='links'><Link to='/aboutus'>Sobre Nós</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar