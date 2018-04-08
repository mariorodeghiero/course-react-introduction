import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar titulo="React" />
        </header>
      </div>
    );
  }
}

export default App;
