import React, { Component } from "react";
import Navbar from "./components/Navbar";
import CardList from "./components/Card-list";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar titulo="React" />
        <div className="container">
          <CardList qtdLine="3" sizeCol="4" />
        </div>
      </div>
    );
  }
}

export default App;
