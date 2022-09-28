import ImgBackground from '../img/About-Us-Img.png'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='about-us-div-main'>
      <div className='about-us-text'>
        <h1>Sobre Nós</h1>
          <p>Com intuito de desburocratizar a legalização de imóveis irregulares, nós da <span>MV - Consultoria e Legalização imobiliária</span>, temos a missão de trazer essa possibilidade para esse mercado que só cresce no Brasil.</p>
          <p>Sempre trazendo a melhor solução jurídica para a regularização de seu imóvel, bem como, oferecer todo o suporte jurídico necessário para suas operações imobiliárias serem efetuadas com segurança.</p>
      </div>
      <img className='Img-background' src={ImgBackground} alt="Img-background" />
    </div>
  )
}

export default AboutUs