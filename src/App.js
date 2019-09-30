import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Chat from './views/Chat'
import Login from './views/Login'


function App() {

  return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Login} exact/>
          <Route path='/chat' component={Chat} exact/>

        </Switch>
      </BrowserRouter>
  );
}

export default App;
