import React, { useState, useCallback } from 'react';

import './style.css';

import Logo from '../assets/logo.png'

import api from '../services/api'
import swal from 'sweetalert'

export default function SignInComponent() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = useCallback(async (e) =>{
        e.preventDefault()
        let err = ''
        const user = await api.post('signin',{email, password})
        .catch(function(erro){
            swal("Erro", "Email ou senha incorreta", "error")
            err = erro
        })
        
        if (err ==='') {
            swal("Bem Vindo", "Seja bem vindo", "success")
        }
        
        
    }, [email, password,])


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
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Nome de usuário *" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Senha *" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btnRegister">Login</button>
        </form>
          </center>
      </div>
    </div>
  </div>
  );
}
