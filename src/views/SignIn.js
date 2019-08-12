import React, { Component } from 'react';

import SignInComponent from '../components/SignInComponent'

export default class SignIn extends Component {

    onRedirectChat = () =>{
        this.props.history.push('/chat')
    }

render(){

  return (
    <SignInComponent onRedirectChat={this.onRedirectChat}/>
    );
 
}

}
