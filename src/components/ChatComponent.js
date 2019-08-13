import React, { Component } from 'react';

import './style2.css';

import api from '../services/api'

export default class ChatComponent extends Component {

    state={
        msg: '',
        mensagens:[]
    }

    handleSubmit = async e =>{
      if(this.state.msg !== ''){
        e.preventDefault()
        const input_msg = this.state.msg
        this.setState({msg: ''})
        this.setState({ mensagens: [...this.state.mensagens, {name: 'Você', text: this.state.msg} ] })
        const token = await localStorage.getItem('token')
        const msg = await api.post('/message', {text:input_msg, content:{}},      {
            headers: { Authorization: "Bearer " + token }
          })
        console.log(msg);
          const bot_output =msg.data.output.text
        this.setState({mensagens: [...this.state.mensagens, {name: 'Maquinista', text: bot_output}]})
        
      }
    }

  render() {
    return(
  <div class="container">
    <div class="container-fluid">
      <div class="row">
        <div class='chatbox col-md-12'>
          <div class="row">
            <div class="chatbox__messages__user-message--ind-message chatbox__messages mt-3">
                <div class="col-lg-12">
                  <p class="name">O Maquinista</p><br/>
                  <p class="message">Olá, seja bem vindo, eu sou O Maquinista e irei ajudar você a escolher o seu curso na FIAP.</p>
                </div>

            </div>

{ this.state.mensagens.map((msg) => (
            <div class="chatbox__messages__user-message--ind-message chatbox__messages mt-3 col-lg-11">
              <p class="col-lg-8">{msg.name}:
              <br/>
              {msg.text}
              </p>
            </div>
            )) }
          </div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Digite uma mensagem.." value={this.state.msg} onChange={e => this.setState({msg : e.target.value})} />
          </form>
        </div>
      </div>
    </div>
  </div>
    );
  }
}
