import React from 'react';
import  { Link } from 'react-router-dom'
import  { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import './style.css';

export default () => {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descrava o caso detalhadamente para encontrar um heró para resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>
        <form action="">
          <input placeholder="Título do caso"/>
          <textarea placeholder="Descrição"/>
          <input placeholder="Valor em reais"/>

          <div className="input-group">
            <input placeholder="Cidade"/>
            <input placeholder="UF" style={{ width: 80 }}/>
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}