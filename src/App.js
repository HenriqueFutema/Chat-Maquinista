import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SignIn from './views/SignIn'
import Chat from './views/Chat'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={SignIn} exact/>
        <Route path='/chat' component={Chat} exact/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
