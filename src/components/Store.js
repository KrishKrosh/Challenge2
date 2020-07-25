import React, { Component } from "react";
import MediaCard from "./Card.js";
import { CircularProgress, Button } from "@material-ui/core";
import HorizontalScroller from "react-horizontal-scroll-container";
class Store extends Component {
  constructor() {
    super();

    this.state = {
      cards: {},
      categories: {},
      isLoading: true,
      currentCategory: "",
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
          categories: [...new Set(cards.prizes.map((x) => x.category))],
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
            <HorizontalScroller>
              {this.state.categories.map((item, i) => (
                <Button
                  key={i}
                  variant="contained"
                  color="secondary"
                  className="categoryButton"
                  onClick={() => this.setState({ currentCategory: item })}
                >
                  {item.replace("_", " ")}
                </Button>
              ))}
            </HorizontalScroller>
            <div className="store">
              {this.state.cards
                .filter(
                  (prize) => prize.category === this.state.currentCategory
                )
                .map((item, i) => (
                  <MediaCard
                    points={item.points + " points"}
                    name={item.name}
                    image={item.image_url}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Store;
