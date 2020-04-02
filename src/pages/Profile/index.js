import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import './style.css';

export default () => {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the hero"/>
        <span>Bem vinda, APAD</span>

        <Link className="button" to='/incidents/new'>Cadastrar novo caso</Link>
        <button type="button">
          <FiPower size={18} color="#E02041"/>
        </button>
      </header>

      <main>
        <h1>Casos cadastrados</h1>

        <ul>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>

            <strong>DESCRIÇÃO</strong>
            <p>Descrição teste</p>

            <strong>Valor</strong>
            <p>R$20,99</p>

            <button>
              <FiTrash2 size={20} color="#a8a8b3"/>
            </button>
          </li>
        </ul>
      </main>

      
    </div>
  )
}