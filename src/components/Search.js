import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(e) {
    this.props.updateSearch(e);
  }

  state = {};
  render() {
    return (
      <form>
        <div className="input-field col s6">
          <input
            placeholder="Enter your word"
            onChange={this.updateSearch}
            type="text"
            value={this.props.busca}
          />
          <label>Search</label>
        </div>
        <p>{this.props.busca}</p>
      </form>
    );
  }
}

export default Search;
