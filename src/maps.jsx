import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
    render() {
        return (
            <div>
          <Map google={this.props.google} 
        //   look for a center or default center
          initialCenter={{lat: this.props.race.circuit.lat, lng: this.props.race.circuit.lon}}
          center={{lat: this.props.race.circuit.lat, lng: this.props.race.circuit.lon}}
          
          zoom={14}
          style={{width: '95%', height: '250%', position: 'relative'}}
          >

    
            <Marker 
            position={{lat: this.props.race.circuit.lat, lng: this.props.race.circuit.lon}}/>
    
            {/* <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow> */}

            {/* {this.props.race.circuit.lat}
            {this.props.race.circuit.lon} */}
          </Map>
          </div>
        );
      }
    }



export default GoogleApiWrapper({
  apiKey: "AIzaSyA26uTcjz7FVYOIpNzV7DgkNRfbrfWVdr4"
})(MapContainer)
 
