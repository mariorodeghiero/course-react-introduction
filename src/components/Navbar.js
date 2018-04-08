import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav>
        <div className="nav-wrapper white ">
          <div className="container ">
            <a href="#" className="brand-logo black-text">
              {this.props.titulo}
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down ">
              <li>
                <a href="sass.html" className="black-text">
                  Home
                </a>
              </li>
              <li>
                <a href="badges.html" className="black-text">
                  About Me
                </a>
              </li>
              <li>
                <a href="collapsible.html" className="black-text">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
