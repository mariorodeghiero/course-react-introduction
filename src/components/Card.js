import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    return (
      <div className="card sticky-action">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            className="activator"
            src="http://materializecss.com/images/office.jpg"
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Title<i className="material-icons right">more_vert</i>
          </span>
          <p>Description</p>
        </div>
        <div className="card-action">
          <a href="#">More</a>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Card Title<i className="material-icons right">close</i>
          </span>
          <p>Details</p>
        </div>
      </div>
    );
  }
}

export default Card;
