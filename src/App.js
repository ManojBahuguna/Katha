import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';

const App = () => (
  <BrowserRouter>
    <div className="flex flex-col height-full">
      <Header />
      
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
