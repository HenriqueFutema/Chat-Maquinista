import React, { Component } from 'react';

import api from '../services/api'
import Message from './Message'

import './style.css'

import img1 from '../assets/effects (1).png'

export default class ChatComponent extends Component {

    state={
        msg: '',
        mensagens:[],
        session: '',
        name: ''
    }

    async componentDidMount(){


      const user = await localStorage.getItem('name')

      this.setState({ name: user })

    }


    handleSubmit = async e =>{
      e.preventDefault()
      if(this.state.msg !== ''){

        const input_msg = this.state.msg

        this.setState({msg: ''})
        this.setState({ mensagens: [...this.state.mensagens, {author: 'Você', content: input_msg, user: true} ] })

        const msg = await api.post('/message', {session_id: this.state.session ,text:input_msg},)

          
        console.log(msg);

        console.log(msg.data.session);

        this.setState({ session: msg.data.session })
        
        msg.data.response.output.generic.map(txt =>(
          this.setState({ mensagens: [...this.state.mensagens, {author: 'Bot', content: txt.text, user: false} ] })

        ))

        console.log(this.state.mensagens);
        
      }
    }

  render() {
    return(
      <div>
        <div className="det">
          <img src={img1} alt="" srcSet="" className="img-fluid"/>
        </div>
      <div className="container">


        <div className="row mt-3">

          <div className="col-8 msg p-2">
            <h4>Bot - Olá {this.state.name}</h4>
          </div>

        </div>

        { this.state.mensagens.map((msg, key) => (

          <Message msg={msg} key={key}/>
          )) }

          <br/>
          <br/>
          <br/>
          <br/>



        <form onSubmit={this.handleSubmit} className="form-group row mt-5 chat-inp">
            <input className="form-control m-3 col-lg-10 col-md-9 col-6" type="text" placeholder="Nova Mensagem" value={this.state.msg} onChange={e => this.setState({msg : e.target.value})} />

            <button type="submit" className="btn btn-primary btn-enviar btn-lg">></button>

        </form>
      </div>
      </div>

    );
  }
}
