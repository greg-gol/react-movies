import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/navBar';
import SearchView from './views/searchView';

import logo from './logo.svg';
import './App.css';


export default class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>

        <NavBar />

        <Switch>
          <Route path="/search" component={SearchView} />
        </Switch>
      </div>
    );
  }
}
