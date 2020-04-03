import React, { Component } from "react";
import Header from "./components/Header/Header";
import Fighter from "./components/Fighter/Fighter";
import "./App.css";

import { Fighters } from "./database/fighters";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fighters: null
    };
  }

  componentDidMount() {
    this.setState({
      fighters: Fighters
    });
  }

  setFighters = fighters => {
    const fighterArray = [];
    if (fighters !== null) {
      fighters.forEach(fighter => {
        const { name, moves } = fighter;
        fighterArray.push(<Fighter name={name} moves={moves} />);
      });
    }
    return fighterArray;
  };

  render() {
    const { fighters } = this.state;
    return (
      <div className="App">
        <Header />
        {this.setFighters(fighters)}
      </div>
    );
  }
}

export default App;
