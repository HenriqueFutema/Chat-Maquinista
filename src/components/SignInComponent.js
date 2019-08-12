import React, { Component } from 'react';

import './style.css';

import Logo from '../assets/logo.png'

import api from '../services/api'
import swal from 'sweetalert'

export default class SignInComponent extends Component{
    
    state = {
    email: '',
    password: ''
    }
    
    handleSubmit = async (e) =>{
        e.preventDefault()
        let err = ''
        const { email, password } =this.state
        const user = await api.post('signin',{email, password})
        .catch(function(erro){
            swal("Erro", "Email ou senha incorreta", "error")
            err = erro
        })
        
        if (err ==='') {
            swal("Bem Vindo", "Seja bem vindo", "success")
            localStorage.setItem('token', user.data.token)
            this.props.onRedirectChat()
        }
        
    }


    render(){


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
          <form className="register-form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Nome de usuário *" value={this.state.email} onChange={e => this.setState({email: e.target.value})} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Senha *" value={this.state.password} onChange={e => this.setState({ password: e.target.value})} />
            </div>
            <button type="submit" className="btn btnRegister">Login</button>
        </form>
          </center>
      </div>
    </div>
  </div>
  );
    }
}
