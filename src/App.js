import React, { Component } from 'react';
import Map from './Map.js';
import Toggler from './Toggler.js';
import Search from './Search.js';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      map: null,
      latitude: 40.7128,
      longitude: -74.006,
      style: 'mapbox://styles/mapbox/dark-v9',
    }
  }

  render() {
    return (
      <div className="App">
          <Search app={this} />
          <Toggler app={this} />
          <Map app={this} />
      </div>
    );
  }
}

export default App;
