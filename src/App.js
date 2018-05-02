import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
