import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import SignUpForm from './pages/signUpForm';
import SignInForm from './pages/sigInForm';
import Dashboard from './pages/dashboard';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <Route exact path="/" component={SignUpForm}></Route>
        <Route path="/sign-in" component={SignInForm}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
      </Router>
    );
  }
}

export default App;