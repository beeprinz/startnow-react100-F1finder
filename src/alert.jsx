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
        Click for detailed circuit information <a className="btn btn-primary btn-sm" href={`${this.props.race.circuit.url}`} role="button">Track Details</a> 
        </p>  
      </div>
    );
  }

}


export default Alert;

