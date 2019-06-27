import React, { Component } from 'react';
import mapbox from 'mapbox-gl';
import './Map.css';

class Map extends Component {

  componentDidMount() {
    mapbox.accessToken = 'pk.eyJ1Ijoia2Fzc2FuZHJhbSIsImEiOiJjajRkMHBxOWEwZ2YxMzJydHV6bjdydHVvIn0.B1BbwVvXXRVei9FFgANoAA';

    var map = new mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11'
    });
  }

  render() {
    return (
      <div id="map">
      </div>
    );
  }
}

export default Map;
