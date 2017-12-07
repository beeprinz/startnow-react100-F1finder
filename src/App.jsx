import React, { Component } from "react";
import Alert from './alert'; 
import Maps from './maps';

const axios = require("axios");

class App extends Component { //parent component
  constructor(props) {
    super(props);

    this.state = {
      raceTracks: [],  
      selected: null,  
    };

    this.count = 0;
    
    this.handleGrandPrixName = this.handleGrandPrixName.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    //had to make a proxy server since heroku needed an https req not http
    //in server.js made a new route /api which collects data from the api and then this axios req
    //will pull the data from the proxy /api using https fixing the issue
    axios
      .get("/api")
      .then(response => {
        let races = response.data.MRData.RaceTable.Races;
        races = races.map((race) => {
          const raceInfo = {
            name: race.raceName,
            date: race.date,
            url: race.url,
            circuit: {
              name: race.Circuit.circuitName,
              url: race.Circuit.url,
              lat: race.Circuit.Location.lat,
              lon: race.Circuit.Location.long,
              country: race.Circuit.Location.country,
              city: race.Circuit.Location.locality,
            }
          }

          return raceInfo;
        });

        return races;
      })
      .then(races => this.setState({ raceTracks: races }));
  }

  handleGrandPrixName(e) {
    this.setState({ grandPrixName: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.grandPrixName === '0') {
      return false;
    }

    let grandPrixInfo = this.state.raceTracks.find((race) => {
      return race.name === this.state.grandPrixName;
    })

    this.setState({ selected: grandPrixInfo });

  }
  
    

  render() {
    return (
      <div>
        <div className="container">
          <h1 style={{color: 'white'}}>Formula 1 Track Locator</h1>
          <h5 style={{color: 'white'}}>Discover Circuits Around the World!</h5>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                {/* <div className="card-header">Enter Information</div> */}
                <div className="card-body">
                  <div>
                    {/* <form onSubmit={this.handleClick}> */}
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          Choose a Grand Prix
                        </label>
                        <select
                          className="mt-2 mb-4 form-control create-todo-priority"
                          id="exampleFormControlSelect1"
                          onChange={this.handleGrandPrixName} 
                          // defaultValue={this.state}
                        >
                        <option value="0" name="grandPrixName">Select Race</option>  
                        { this.state.raceTracks && this.state.raceTracks.map((race, index) => {
                          return <option key={index} >{race.name}</option>
                        })}
                        </select>
                      </div>
                    
                      <button
                        onClick={this.handleClick}
                        type="submit"
                        className="btn btn-primary btn-block create-todo"
                      >
                        Find Track!
                      </button>
                    {/* </form> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">Circuit Info</div>
                <div className="card-body" />
                <div className="container">
                { !!this.state.selected && <Alert race={this.state.selected} />}
                {/* Selected has a default value of null which is falsey, basically saying if selected is not null do the Alert call */}
               </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="mt-4 mb-4 card">
                <div className="card-header">Explore Circuit in Map, Satellite View Recommended</div>
                <div className="card-body">
                  <div className="container">
                  { !!this.state.selected && <Maps race={this.state.selected} />}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
