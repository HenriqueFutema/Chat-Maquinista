import React, { Component } from 'react';

import './style2.css';

import api from '../services/api'

export default class ChatComponent extends Component {

    state={
        msg: '',
        mensagens:[]
    }

    async componentDidMount(){
      const user_id = localStorage.getItem('user')
      const token = await localStorage.getItem('token')

      const response = await api.get(`chat/${user_id}`,{
        headers: {  Authorization: "Bearer " + token }
      })
      
      console.log(response.data.chat);
      this.setState({ mensagens: response.data.chat })
      
    }

    handleSubmit = async e =>{
      if(this.state.msg !== ''){
        e.preventDefault()
        const input_msg = this.state.msg
        this.setState({msg: ''})
        this.setState({ mensagens: [...this.state.mensagens, {author: 'Você', content: this.state.msg} ] })
        const token = await localStorage.getItem('token')
        const msg = await api.post('/message', {text:input_msg, content:{}},      {
            headers: { Authorization: "Bearer " + token }
          })
        console.log(msg);
          const bot_output =msg.data.output.text
        this.setState({mensagens: [...this.state.mensagens, {author: 'Maquinista', content: bot_output}]})
        console.log(this.state.mensagens);
        
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

{ this.state.mensagens.map((msg, key) => (

            <div class="chatbox__messages__user-message--ind-message chatbox__messages mt-3 col-lg-11" key={msg._id}>
              <p class="col-lg-8">{msg.author}:
              <br/>
              {msg.content}
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
