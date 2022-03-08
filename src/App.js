import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route exact path="/" componet={ Login } />
      <Route path="/carteira" componet={ Wallet } />
    </Switch>
  );
}

export default App;
