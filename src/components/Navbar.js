import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    let menu = [
      { title: "Home", link: "#home" },
      { title: "About Me", link: "#about" },
      { title: "Contact", link: "#contatc" }
    ];

    let list = menu.map(function(value, index) {
      return (
        <li key={index}>
          <a href={value.link} className="black-text">
            {value.title}
          </a>
        </li>
      );
    });

    return (
      <nav>
        <div className="nav-wrapper white ">
          <div className="container ">
            <a href="#" className="brand-logo black-text">
              {this.props.titulo}
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down ">
              {list}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
