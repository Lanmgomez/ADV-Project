import './Contacts.css'

const Contact = () => {
  return (
    <div className='div-contacts-talkwithus'>
      <div className='contacts-wpp'>
        <h1>Gostou ? Entre em contato</h1>
          <h3>Clique aqui para iniciar uma conversa pelo WhatsApp.</h3>
          <a className='wpp-contact-talkwithus' href="http://web.whatsapp.com/send?phone=5511947457110" target="_blank" rel='noreferrer'>
            <i className='bi bi-whatsapp'> (11) 9 4745-7110</i>
          </a>
      </div>
      <div className='contacts-email'>
        <h3>Envie uma mensagem para o nosso e-mail</h3>
          <form>
            <label>
             <span>Nome:</span>
             <input type="text" />
            </label>
            <label>
              <span>Email:</span>
              <input type="text" name="" id="" />
            </label>
            <label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </label>
          </form>
      </div>
    </div>
  )
}

export default Contact