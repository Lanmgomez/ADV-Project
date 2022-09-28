import './FooterDark.css'

const FooterDark = () => {
  return (
    <footer className='footer-Dark'>
        <div className='contacts-footer-dark-wpp'>
            <p>
              <i className="bi bi-whatsapp"></i>
              WhatsApp:
              <span> (11) 94745-7110</span>
            </p>
        </div>
        <div className='contacts-footer-dark-email'>
            <p>
              <i className="bi bi-envelope"></i>
              Email comercial: 
              <span> mv.consultoriaelegalizacao@outlook.com</span>
            </p>
        </div>
    </footer>
  )
}

export default FooterDark