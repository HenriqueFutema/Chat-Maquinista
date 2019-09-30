import React, { Component } from 'react';


import LoginComponent from '../components/LoginComponent'

export default class Login extends Component {

  onRedirectChat = () => {
    this.props.history.push("/chat");
  };


  render() {
    return(
        <LoginComponent onRedirectChat={this.onRedirectChat}/>
    );
  }
}
