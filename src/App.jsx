import React, { Component } from "react";
import Alert from './Alert'; 

const axios = require("axios");

class App extends Component { //parent component
  constructor(props) {
    super(props);

    this.state = {
      raceTracks: [],    
    };

    this.count = 0;
    
    this.handleGrandPrixName = this.handleGrandPrixName.bind(this);
    this.handleTodo = this.handleTodo.bind(this);
  }

  componentWillMount() {
    axios
      .get("http://ergast.com/api/f1/2017.json")
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
    this.setState({ GrandPrixName: e.target.value });
  }

  handleTodo(e) {
    e.preventDefault();
    if (this.state.GrandPrixName === '0') {
      return false;
    }
  }
    // const userText = this.state.text;
    // const userPriority = this.state.priority;
    // const todos = this.state.todos;

    // todos.push({
    //   id: this.count++,
    //   text: userText,
    //   priority: userPriority,
    //   editEnable: false 
    // });

    // this.setState({
    //   todos:todos 
    // })
  

  render() {
    return (
      <div>
        <div className="container">
          <h1>Formula 1 Track Locator</h1>
          <p>Discover Circuits Around the World!</p>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                {/* <div className="card-header">Enter Information</div> */}
                <div className="card-body">
                  <div>
                    <form onSubmit={this.handleTodo}>
                      {/* <div className="form-group">
                        <label htmlFor="textArea">I want to...</label>
                        <textarea
                          className="form-control create-todo-text" 
                          id="textArea"
                          rows="3"
                          onChange={this.handleText}
                        />
                      </div> */}
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          Choose a Grand Prix
                        </label>
                        <select
                          className="mt-2 mb-4 form-control create-todo-priority"
                          id="exampleFormControlSelect1"
                          onChange={this.handleGrandPrixName} 
                          defaultValue={this.state}
                        >
                        <option value="0" name="grandPrixName">Select Race</option>  
                        { this.state.raceTracks && this.state.raceTracks.map((race, index) => {
                          return <option key={index} >{race.name}</option>
                        })}
                        </select>
                      </div>
                    
                      <button
                        type="submit"
                        className="btn btn-primary btn-block create-todo"
                      >
                        Find Track!
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">Circuit Info</div>
                <div className="card-body" />
                <div className="container">
                <p>
                  
                </p>
                  {/* {this.state.todos.map((todo, index) => {
                    //console.log(index);
                    return <Alert
                      todo={todo}
                      key={index}
                      //onSave={this.handleSave} 
                      //onDelete={this.handleDelete}
                      //these are all props that are being rendered in alert
                    />
                    //are we going to put the id of the todo in this function?
                  })
                  } */}
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
