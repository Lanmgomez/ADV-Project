// css
import './MainLightBaner.css'

const MainLightBaner = () => {
  return (
    <div className='MainLightBaner'>
      <div className='title-service'>
        <h1>Podemos resolver o seu problema</h1>
      </div>
      <div className='Main-cars-baner'>
        <div className='card-job-1'>
            <h1>Jurídicos</h1>
              <i className="bi bi-clipboard-data"></i>
                <ul>
                    <li>Contratos e certidões imobiliárias</li>
                    <li>Assessoria jurídica imobiliária</li>
                    <li>Regularizações de imóveis</li>
                </ul>
        </div>
        <div className='card-job-2'>
            <h1>Regularizações</h1>
              <i className="bi bi-newspaper"></i>
                <ul>
                    <li>Aumento de áreas;</li>
                    <li>Aumento de cômodos;</li>
                    <li>Multas e infrações ambientais;</li>
                </ul>
        </div>
        <div className='card-job-3'>
            <h1>Consultorias</h1>
              <i className="bi bi-paperclip"></i>
                <ul>
                    <li>Avaliação de demandas pontuais;</li>
                    <li>Reuniões;</li>
                    <li>Consultas;</li>
                </ul>
        </div>
      </div>
    </div>
  )
}

export default MainLightBaner