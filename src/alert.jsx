import React, { Component } from "react";

class Alert extends Component {

  render() {

    return (
      <div>
        <h4>{this.props.race.circuit.name}</h4> 
        <p>
         The {this.props.race.name} is hosted at {this.props.race.circuit.name} located in {this.props.race.circuit.city}, {this.props.race.circuit.country}. 
        </p>
        <p>
        Explore the Circuit on the map below. Many circuits have a street view feature that allow you to get a first person view of the track. Just drop the yellow avatar in the map view on the track.
        </p>
      </div>
    );
  }

}


export default Alert;

