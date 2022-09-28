// images
import Balanca from '../img/balanca.png'
import Chave from '../img/chave.png'
import Certificado from '../img/certificado.png'
// css
import './Home.css'
// components
import MainDarkBaner from '../components/MainDarkBaner'
import MainLightBaner from '../components/MainLightBaner'

const Home = () => {

  return (
    <main>
        <div className='container-icons'>
          <div className='icon'>
            <img src={Balanca} alt="Balanca" />
              <h1 className='h1-icon-1'>Serviços Jurídicos</h1>
          </div>
          <div className='icon'>
            <img src={Chave} alt="Chave" />
              <h1 className='h1-icon-2'>Regularização Imobiliária</h1>
          </div>
          <div className='icon'>
            <img src={Certificado} alt="Certificado" />
              <h1 className='h1-icon-2'>Consultoria Especializada</h1>
          </div>
        </div>
        <div className='main-home-img'>
          <div>
            <h2>Solicite o seu orçamento e faça a regularização do seu imóvel sem precisar enfrentar tanta burocracia</h2>
          </div>
          <div className='nao-perca-tempo'>
            <h1>Não perca tempo e</h1>
            <h1><span className='span-regularize'>Regularize</span> seu imóvel</h1>
          </div>
        </div>
        <button>
          <a id='button-link' href="http://web.whatsapp.com/send?phone=5511947457110" target="_blank" rel='noreferrer'>Solicite um orçamento</a>
        </button>
        <h1 className='title-mv-consultoria'>MV - Consultoria e Legalização Imobiliária</h1>
        <MainDarkBaner />
        <MainLightBaner />
    </main>
  )
}

export default Home