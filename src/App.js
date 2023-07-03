import { useState } from 'react';
import './App.css';
import emailjs from '@emailjs/browser'
import ReactWhatsapp from 'react-whatsapp'
import Banner from './components/Banner';
import { BsWhatsapp } from 'react-icons/bs'
import Pix from './components/Pix';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [name, setName] = useState('')
  //const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [insta, setInsta] = useState('')

  /*const QRcode = require('qrcode');

  const link = 'https://dj-catalog.vercel.app/'

  QRcode.toDataURL(link, (err, url) => {
    if (err) throw err;
    console.log(url);
  });
  */

  const parametrosPergunta = {
    from_name: name,
    insta: insta,
    mensagem: message
  }

  const msgZap = 'Nome: ' + name + '\n' + 'Insta: ' + insta + '\n' + 'Mensagem: ' + message


  function enviarPergunta(e) {
    e.preventDefault();

    if (name === '' || message === '') {
      alert('Preencha os campos necessários')
      return;
    }
  }

  function copiarChavePix(e) {
    navigator.clipboard.writeText('papoparalello@gmail.com')
    console.log(msgZap)
    toast('Chave Copiada!')
  }

  // const QRCode = require('qrcode');

  // const link = 'https://msg-papo-paralello.vercel.app/'; // Insira o link que deseja transformar em QR Code

  // QRCode.toDataURL(link, (err, url) => {
  //   if (err) throw err;
  //   console.log(url); // Exibe o link do QR Code em formato de imagem (data URL)
  // });

  return (
    <>
      <div className="container">
        <Banner />
        <h1 className="title">Envie sua pergunta para o papo!</h1>

        <form className="form" onSubmit={enviarPergunta}>
          <input
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className="input"
            type="text"
            placeholder="Digite seu insta. Ex: @papoparalello..."
            onChange={(e) => setInsta(e.target.value)}
            value={insta}
          />

          <textarea
            className="textarea"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <Pix
            copiar={copiarChavePix}
            toast={<ToastContainer />}
          />
          <span className='text'>Pergunta 5$</span>
          <span className='text'>Divulgação 10$</span>

          <ReactWhatsapp className='button'
            number='+5511970591232'
            message={msgZap}
          >Enviar   <BsWhatsapp color='#FFF' size='0.8em' /></ReactWhatsapp>

          <span className='text'>**Favor enviar comprovante Pix</span>


        </form>
      </div>
    </>
  );
}

export default App;
