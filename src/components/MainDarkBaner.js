import React from 'react'
import './MainDarkBaner.css'

const MainDarkBaner = () => {
  return (
    <div className='main-dark-baner'>
        <div className='situacao-div'>
            <h1>Nós entendemos a sua situação, por isso podemos ajudá-lo.</h1>
                <p>Paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis provident necessitatibus aliquam, officia incidunt, laboriosam temporibus animi, maiores iste deserunt voluptatibus voluptates alias exercitationem totam minima. Repellat ipsa perferendis odio!</p>
                <button className='saiba-mais-button'>Saiba Mais</button>
            <div className='contatos'>
                <p>
                    <i className="bi bi-whatsapp"></i>
                    WhatsApp:
                    <span> (11) 94745-7110</span>
                </p>
                <p>
                    <i className="bi bi-envelope"></i>
                    Email comercial: 
                    <span className='email'> mv.consultoriaelegalizacao@outlook.com</span>
                </p>
                <p>
                    <i className="bi bi-geo-alt"></i>
                    <span>Alphaville - Barueri, SP.</span>
                </p>
            </div>
        </div>
        <div className='o-que-fazemos'>
            <h1>O que fazemos</h1>
                <div className='cards-list'>
                    <div className='cards-01'>
                        <h2>Regularizações</h2>
                    </div>
                    <div className='cards-02'>
                        <h2>Orientações</h2>
                    </div>
                </div>
                <div className='cards-list'>
                    <div className='cards-03'>
                        <h2>Registros</h2>
                    </div>
                    <div className='cards-04'>
                        <h2>Alvarás</h2>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default MainDarkBaner