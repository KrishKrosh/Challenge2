import React, { Component } from "react";
import Categories from "./Categories.js";
import MediaCard from "./Card.js";
import { CircularProgress } from "@material-ui/core";
class Store extends Component {
  constructor() {
    super();

    this.state = {
      cards: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getCards();
  }
  getCards() {
    fetch("https://api.youthcomputing.ca/shop/prizes", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      // ...then we update the users state
      .then((cards) =>
        this.setState({
          cards: cards.prizes,
          isLoading: false,
        })
      )
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <CircularProgress />
        ) : (
          <div>
            <Categories />
            {this.state.cards.map((item, i) => (
              <MediaCard
                points={item.points + " points"}
                name={item.name}
                image={item.image_url}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Store;
