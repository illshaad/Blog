import React, { Component } from 'react';
import Showarticle from './components/Showarticle'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Bienvenue</h1>
        <Showarticle/>
      </div>
    );
  }
}

export default App;
