import React, { Component } from 'react';

import api from '../services/api'
import Message from './Message'

import './style.css'

export default class ChatComponent extends Component {

    state={
        msg: '',
        mensagens:[],
    }


    handleSubmit = async e =>{
      e.preventDefault()
      if(this.state.msg !== ''){

        const input_msg = this.state.msg

        this.setState({msg: ''})
        this.setState({ mensagens: [...this.state.mensagens, {author: 'Você', content: input_msg, user: true} ] })

        const token = await localStorage.getItem('token')
        const msg = await api.post('/message', {text:input_msg},)

          
          console.log(msg);
          console.log(msg.data.response.output.generic);

          msg.data.response.output.generic.map(txt =>(
            this.setState({ mensagens: [...this.state.mensagens, {author: 'Bot', content: txt.text, user: false} ] })

          ))

          // const bot_output =msg.data.output.text
          // this.setState({mensagens: [...this.state.mensagens, {author: 'Maquinista', content: bot_output}]})


        console.log(this.state.mensagens);
        
      }
    }

  render() {
    return(
      <div className="container">

        <div className="row mt-3">

          <div className="col-8 msg p-2">
            <h4>Bot - a</h4>
          </div>

        </div>

        { this.state.mensagens.map((msg, key) => (

          <Message msg={msg}/>
          )) }


        <form onSubmit={this.handleSubmit} className="form-group row mt-5">
            <input className="form-control m-3" type="text" placeholder="Nova Mensagem" value={this.state.msg} onChange={e => this.setState({msg : e.target.value})} />


        </form>
      </div>

    );
  }
}
