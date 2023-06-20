import { useState } from 'react';
import './App.css';
import emailjs from '@emailjs/browser'

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

  function enviarPergunta(e) {
    e.preventDefault();

    if(name==='' || message==='') {
      alert('Preencha os campos necessários')
      return;
    }

    emailjs.send('service_tmd1fml', 'template_6i1bbd5', parametrosPergunta, 'docTnjZjCVycyJCUg')
    .then((result) => {
      alert("MENSAGEM ENVIADA! Obrigado :)")
      console.log(result.status, result.text)
    },(err)=>{
      alert('ERRO! SUA MSG Ñ FOI ENVIADA!')
      console.log(err)
    });
    
  }

  return (
    <div className="container">
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
        {/* <input
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        /> */}

        <textarea
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default App;
