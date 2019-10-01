import React, { Component } from 'react';

import img2 from '../assets/effects (2).png'
import logoFiap from '../assets/logo-fiap.png'

import swal from 'sweetalert'

export default class LoginComponent extends Component {

    state = {
        name: ''
    }

    handleSubmit = async (e) =>{

        e.preventDefault()

        if (this.state.name !== '') {
            
            await localStorage.setItem('name', this.state.name)

            return this.props.onRedirectChat()


        }else{

            return swal('Preencha todos os campos', 'Tente novamente', 'error')

        }

    }

  render() {
    return(
        <div className="tela-login">
            <div className="det2">
                <img src={img2} alt="" srcSet="" className="img-fluid"/>
            </div>

            <div className="container mt-5">

                <div className="row h-100 justify-content-center align-items-center logo">
                    <div className="col-lg-3 col-md-6 col-10">
                        <img src={logoFiap} alt="" srcSet="" className="img-fluid"/>

                        <form onSubmit={this.handleSubmit} className="form-group row mt-3 form-msg">

                            <input className="form-control my-3 input-entrar" autoFocus type="text" placeholder="Seu Nome" value={this.state.name} onChange={e => this.setState({name : e.target.value})} />

                            <button type="submit" className="btn btn-primary btn-lg btn-block btn-entrar">ENTRAR</button>

                        </form>

                    </div>
                </div>

            </div>

        </div>
    );
  }
}
