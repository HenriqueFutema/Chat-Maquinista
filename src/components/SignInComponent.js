import React from 'react';

import './style.css';

import Logo from '../assets/logo.png'

export default function SignInComponent() {
  return (
    <div className="container-fluid register">
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-12 col-md-4 register-left">
        <img src={Logo} alt=""/>
        <h3>Bem Vindo!</h3>
        <p>You are 30 seconds away from earning your own money!</p>
        <input type="submit" name="" value="Criar conta"/><br/>
      </div>
      <div className="col-md-2"></div>
      <div className="col-md-5 register-right">
        <h2 className="register-heading">Efetuar Login</h2>
        <center>
          <div className="register-form">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Nome de usuário *" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Senha *"/>
            </div>
            <input type="submit" className="btnRegister"  value="Login"/>
        </div>
          </center>
      </div>
    </div>
  </div>
  );
}
