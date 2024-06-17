import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {location: "ludvika"}
  }

  fetchWeather() {
    console.log("Loading...")
    console.log(this)
  }

  render() {
    return <div className="app">
      <h1>Classy Weather</h1>
      <div>
        <input 
          type="text" 
          placeholder="Search from location..." 
          value={this.state.location}
          onChange={e => this.setState(e.target.value)}
        />
      </div>
      <button onClick={this.fetchWeather}>Get weather</button>
    </div>
  }
}

export default App