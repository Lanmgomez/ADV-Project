// css
import './Services.css'
// images
//import Balanca02 from '../img/balanca02.png'
import Balanca02 from '../img/Balanca-da-justica.png'
import Chave from '../img/chave-icon.png'
import Martelo from '../img/martelo-icon.png'


const Services = () => {
  return (
    <div className='div-services'>
      <h1>Nossos serviços</h1>
        <div className='first-job-service'>
          <div>
            <h2>Jurídicos</h2>
            <img className='balanca02' src={Balanca02} alt="Balanca" />
          </div>
          <div className='ul-services-job-01'>
            <ul>
              <li>Imóveis sem registro;</li>
              <li>Posse sem contrato ou escritura;</li>
              <li>Contrato e certidão imobiliária;</li>
              <li>Assessoria jurídica imobiliária;</li>
              <li>Regularizações de imóveis.</li>
            </ul>
          </div>
        </div>
        <div className='second-job-service'>
          <div className='ul-services-job-02'>
            <ul>
              <li>Habite-se e alvarás;</li>
              <li>Regularização de imóveis;</li>
              <li>Aumento de áreas;</li>
              <li>Expansão de cômodos;</li>
              <li>Multas e infrações ambientais.</li>
            </ul>
          </div>
          <div>
            <h2>Regularização Imobiliária</h2>
            <img src={Chave} className='chave-02' alt="Balanca" />
          </div>
        </div>
        <div className='thirty-job-service'>
          <div>
            <h2>Consultorias</h2>
            <img className='martelo-icon' src={Martelo} alt="Balanca" />
          </div>
          <div className='ul-services-job-03'>
            <ul>
              <li>Avaliação de demandas pontuais;</li>
              <li>Orientações gerais;</li>
              <li>Reuniões;</li>
              <li>Consultas;</li>
              <li>Mentorias especializadas.</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Services