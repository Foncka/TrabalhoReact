/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import './App.css';
import jpLOGO from'./assets/logo1.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  useEffect(() => {
      if (senha === 'correto' & email==='correto') {
      console.log('matheus123@123.com');
     } else {
      console.log('123123');
    }
  }, [senha,email]);


  const consLog = () => {
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <div className="login-container">
      <img src={jpLOGO} alt="Logo" />
      <div className="principal">
        <h1>Acesse o orkut.br com a sua conta</h1>
        <form>
          <div className="form-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="E-mail"
            />
          </div>
          <div className="form-group2">
            <input
              type="password"
              id="password"
              value={senha}
              onChange={handleSenhaChange}
              placeholder="Senha"
            />
          </div>
        </form>
        <button onClick={consLog} className="botao" type="button">Login</button>
        <a href="nao-acessa" className="link1">Não consegue acessar a conta</a>
      </div>
      <div className="cadastre-se">
        <h4><p>Ainda não é membro?</p></h4>
        <a href="entrar" className="link2"><p>ENTRAR JÁ</p></a>
      </div>
      <div className="footer">
        <h5>©2017 Orkut.br</h5>
      </div>
    </div>
  );
};

export default Login;

