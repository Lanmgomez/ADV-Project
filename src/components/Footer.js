import './Footer.css'
// images
import Logo02 from '../img/logo02.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer-Light'>
        <div className='Logo-MV-Consultoria'>
            <img src={Logo02} className='hand-city-logo' alt="Logo-MV-Consultoria" />
              <ul>
                <hgroup>
                  <h1>Matheus Fernandes</h1>
                    <h4>CEO</h4>
                    <h4>M.V. - Consultoria e Legalização Imobiliária</h4>
                    <h4>Serviços jurídicos | Regularização imobiliária</h4>
                </hgroup>
              </ul>
        </div>
        <div className='footer-contacts'>
          <ul>
            <h3>Saiba mais</h3>
            <li><Link to='/contact'>Entre em contato</Link></li>
            <li><Link to='/services'>Serviços</Link></li>
            <li><Link to='/aboutus'>Sobre nós</Link></li>
          </ul>
        </div>
        <div className='social-medias'>
          <h3>Siga nossas redes sociais</h3>
            <ul>
              <li>
                <i className="bi bi-instagram"></i> Instagram
              </li>
              <li>
                <i className="bi bi-facebook"></i> Facebook
              </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer