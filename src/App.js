import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar titulo="React" />
        <div className="container">
          <div className="row">
            <div className="col m4">
              <Card />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
