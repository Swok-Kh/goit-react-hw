import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Router from './Router';
class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Router />
      </>
    );
  }
}

export default App;
