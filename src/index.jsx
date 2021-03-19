import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Ajuda from './components/Ajuda'


import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  /*<BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/Ajuda" component={Ajuda} />
      <Route path='*' component={ComponenteDePagina404} />
    </Switch>
  </ BrowserRouter>,*/
  <App />,
  document.getElementById('root')
);