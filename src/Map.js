import React, { Component } from 'react';
import mapbox from 'mapbox-gl';
import './Map.css';

class Map extends Component {

  componentDidMount() {
    const app = this.props.app

    mapbox.accessToken = 'pk.eyJ1Ijoia2Fzc2FuZHJhbSIsImEiOiJjajRkMHBxOWEwZ2YxMzJydHV6bjdydHVvIn0.B1BbwVvXXRVei9FFgANoAA';

    const map = new mapbox.Map({
      container: 'map',
      style: app.state.style,
      center: [
        app.state.longitude,
        app.state.latitude
      ],
      zoom: 12
    });

    const navigationControl = new mapbox.NavigationControl();
    map.addControl(navigationControl);

  }

  render() {
    return (
      <div id="map">
      </div>
    );
  }
}

export default Map;
