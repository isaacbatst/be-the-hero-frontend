import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import logoImg from '../../assets/logo.svg';

export default () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();

    const data = {
      name, email, whatsapp, city, uf
    }

    try {
      const response = await api.post('ngos', data);

      alert(`Seu ID de acesso: ${response.data.id}`);
      
      history.push('/')
    } catch (err) {
      alert('Erro no cadastro, tente novamente');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input placeholder="Nome da ONG" onChange={event => setName(event.target.value)} />
          <input type="email" placeholder="E-mail" onChange={event => setEmail(event.target.value)} />
          <input placeholder="WhatsApp" onChange={event => setWhatsapp(event.target.value)} />

          <div className="input-group">
            <input placeholder="Cidade" onChange={event => setCity(event.target.value)} />
            <input placeholder="UF" style={{ width: 80 }} onChange={event => setUf(event.target.value)} />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}