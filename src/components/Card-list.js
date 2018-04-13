import React, { Component } from "react";
import Card from "./Card";
import Search from "./Search";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = { busca: "" };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(e) {
    this.setState({ busca: e.target.value });
  }
  state = {};
  render() {
    let news = [
      {
        title: "Title 1",
        description: "Description 1",
        detail: "Detail 1",
        image: "http://materializecss.com/images/office.jpg"
      },
      {
        title: "Title 2",
        description: "Description 2",
        detail: "Detail 2",
        image: "http://materializecss.com/images/office.jpg"
      },
      {
        title: "Title 3",
        description: "Description 3",
        detail: "Detail 3",
        image: "http://materializecss.com/images/office.jpg"
      },
      {
        title: "Title 4",
        description: "Description 4",
        detail: "Detail 4",
        image: "http://materializecss.com/images/office.jpg"
      },
      {
        title: "Title 5",
        description: "Description 5",
        detail: "Detail 5",
        image: "http://materializecss.com/images/office.jpg"
      },
      {
        title: "Title 6",
        description: "Description 6",
        detail: "Detail 6",
        image: "http://materializecss.com/images/office.jpg"
      },
      {
        title: "Title 7",
        description: "Description 7",
        detail: "Detail 7",
        image: "http://materializecss.com/images/office.jpg"
      }
    ];

    let aux = [];
    let newList = [];

    for (let i = 0; i < news.length; i++) {
      aux.push(news[i]);
      if (aux.length === this.props.qtdLine) {
        newList.push(aux);
        aux = [];
      } else if (i === news.length - 1) {
        newList.push(aux);
      }
    }

    let sizeCol = "col m" + this.props.sizeCol;
    let listCards = function(group) {
      return group.map(function(item, index) {
        return (
          <div key={index} className={sizeCol}>
            <Card data={item} />
          </div>
        );
      });
    };

    let line = newList.map(function(group, index) {
      return (
        <div key={index} className="row">
          {listCards(group)}
        </div>
      );
    });
    return (
      <div>
        <div className="row">
          <Search updateSearch={this.updateSearch} busca={this.state.busca} />
        </div>
        {line}
      </div>
    );
  }
}

export default CardList;
