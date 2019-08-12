import React, { Component } from 'react';

import './style2.css';

export default class ChatComponent extends Component {
  render() {
    return(
  <div class="container">
    <div class="container-fluid">
      <div class="row">
        <div class='chatbox col-md-12'>
          <div class="row">
            <div class="chatbox__messages ">
                <div class="chatbox__messages__user-message--ind-message ">
                  <p class="name">O Maquinista</p><br/>
                  <p class="message">Olá, seja bem vindo, eu sou O Maquinista e irei ajudar você a escolher o seu curso na FIAP.</p>
                </div>
            </div>
          </div>
          <form>
            <input type="text" placeholder="Digite uma mensagem.." />
          </form>
        </div>
      </div>
    </div>
  </div>
    );
  }
}
