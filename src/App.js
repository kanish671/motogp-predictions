import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Category from './Category';

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={["/motogp", "/moto2", "/moto3", "/motoe"]} component={Category} />
      </Switch>
    </div>
  </Router>
)

export default App;
