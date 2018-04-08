import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            [MR]
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Home</a>
            </li>
            <li>
              <a href="badges.html">About Me</a>
            </li>
            <li>
              <a href="collapsible.html">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
