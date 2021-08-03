import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import Home from './view/home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
