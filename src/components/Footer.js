import './Footer.css'
// images
import Logo02 from '../img/logo02.png'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='Logo-MV-Consultoria'>
            <img src={Logo02} className='hand-city-logo' alt="Logo-MV-Consultoria" />
              <ul>
                <hgroup>
                  <h1>Matheus Fernandes</h1>
                    <h4>CEO</h4>
                    <h4>MV - Consultoria e Legalização Imobiliária</h4>
                    <h4>Serviços jurídicos | Regularização imobiliária</h4>
                </hgroup>
              </ul>
        </div>
        <div className='social-medias'>
          <h3>Siga nossas redes sociais</h3>
            <p><i className="bi bi-instagram"></i> Instagram</p>
            <p><i className="bi bi-facebook"></i> Facebook</p>
        </div>
    </footer>
  )
}

export default Footer