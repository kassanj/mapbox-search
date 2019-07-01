import React, { Component } from 'react';
import Map from './Map.js';
import Toggler from './Toggler.js';
import Search from './Search.js';
import PlacesPanel from './PlacesPanel.js';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      map: null,
      latitude: 40.7128,
      longitude: -74.006,
      style: 'mapbox://styles/mapbox/dark-v9',
      places: [
      ]
    }
  }

  render() {
    return (
      <div className="App">
          <PlacesPanel app={this} />
          <Search app={this} />
          <Toggler app={this} />
          <Map app={this} />
      </div>
    );
  }
}

export default App;
