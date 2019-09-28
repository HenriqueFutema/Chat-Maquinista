import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Chat from './views/Chat'

function App() {

  return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Chat} exact/>

        </Switch>
      </BrowserRouter>
  );
}

export default App;
