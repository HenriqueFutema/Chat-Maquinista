import React, { Component } from 'react';

import api from '../services/api'

import './style.css'

export default class ChatComponent extends Component {

    state={
        msg: '',
        mensagens:[]
    }


    handleSubmit = async e =>{
      if(this.state.msg !== ''){
        e.preventDefault()

        const user = localStorage.getItem('user')

        const input_msg = this.state.msg

        this.setState({msg: ''})
        this.setState({ mensagens: [...this.state.mensagens, {author: 'Você', content: input_msg} ] })

        const token = await localStorage.getItem('token')
        const msg = await api.post('/message', {text:input_msg, content:{}},      {
            headers: { Authorization: "Bearer " + token }
          })

          
          console.log(msg);
          const bot_output =msg.data.output.text
          this.setState({mensagens: [...this.state.mensagens, {author: 'Maquinista', content: bot_output}]})
          
          const your_chat = await api.post('/chat/msg', {
            destination: user,
            author: "Você",
            content: input_msg
          },      {
            headers: { Authorization: "Bearer " + token }
          })
        const bot_chat = await api.post('/chat/msg', {
          destination: user,
          author: "Maquinista",
          content:  bot_output[0]
        },      {
          headers: { Authorization: "Bearer " + token }
        })

        console.log(this.state.mensagens);
        
      }
    }

  render() {
    return(
      <div className="container">

        <div className="row justify-content-end">

          <div className="col-8 msg">
            <h4>Test</h4>
          </div>

        </div>


        <form onSubmit={this.handleSubmit} className="form-group row">
            <input className="form-control m-3" type="text" placeholder="Nova Mensagem" />


        </form>
      </div>

    );
  }
}
