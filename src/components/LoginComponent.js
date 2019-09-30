import React, { Component } from 'react';

import img2 from '../assets/effects (2).png'
import logoFiap from '../assets/logo-fiap.png'

export default class LoginComponent extends Component {

    state = {
        name: ''
    }

  render() {
    return(
        <div>
            <div className="det2">
                <img src={img2} alt="" srcSet="" className="img-fluid"/>
            </div>

            <div className="container mt-5">

                <div className="row h-100 justify-content-center align-items-center logo">
                    <div className="col-3">
                        <img src={logoFiap} alt="" srcSet="" className="img-fluid"/>

                        <form onSubmit={this.handleSubmit} className="form-group row mt-3">

                            <input className="form-control my-3" autoFocus type="text" placeholder="Seu Nome" value={this.state.name} onChange={e => this.setState({name : e.target.value})} />

                            <button type="submit" className="btn btn-primary btn-lg btn-block btn-entrar">ENTRAR</button>

                        </form>

                    </div>
                </div>

            </div>

        </div>
    );
  }
}
