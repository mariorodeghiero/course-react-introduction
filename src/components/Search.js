import React, { Component } from "react";

class Search extends Component {
  state = {};
  render() {
    return (
      <form>
        <div className="input-field col s6">
          <input placeholder="Enter your word" type="text" value="" />
          <label>Search</label>
        </div>
      </form>
    );
  }
}

export default Search;
