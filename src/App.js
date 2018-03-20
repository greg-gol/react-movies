import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {fetchMovies} from './actions/movies';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Switch>
          <Route path="*" location={location} render={props =>} exact />
        </Switch> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {movies} = state;

  return {
    movies
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchMovies
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
