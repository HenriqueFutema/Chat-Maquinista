import React, { Component } from 'react';

import img2 from '../assets/effects (2).png'
import logoFiap from '../assets/logo-fiap.png'

export default class LoginComponent extends Component {
  render() {
    return(
        <div>
            <div className="det2">
                <img src={img2} alt="" srcset="" className="img-fluid"/>
            </div>

            <div className="container mt-5">

                <div className="row h-100 justify-content-center align-items-center logo">
                    <div className="col-3">
                        <img src={logoFiap} alt="" srcset="" className="img-fluid"/>

                    </div>
                </div>

            </div>

        </div>
    );
  }
}
