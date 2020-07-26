import React, { Component } from "react";
import MediaCard from "./Card.js";
import { CircularProgress, Button } from "@material-ui/core";
import HorizontalScroller from "react-horizontal-scroll-container";
import SwapVertIcon from "@material-ui/icons/SwapVert";
import LazyLoad from "react-lazyload";

class Store extends Component {
  constructor() {
    super();

    this.state = {
      cards: {},
      categories: {},
      isLoading: true,
      currentCategory: "all",
      lohi: false,
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
            {/* Categories section */}
            <div className="sort">
              <HorizontalScroller>
                <Button
                  variant="contained"
                  color="secondary"
                  className="categoryButton"
                  onClick={() => this.setState({ currentCategory: "all" })}
                >
                  All
                </Button>
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
              <Button
                className="noFocus"
                onClick={() => this.setState({ lohi: !this.state.lohi })}
              >
                <SwapVertIcon fontSize="large" />
              </Button>
            </div>

            {/* Cards/Store Section */}
            <div className="store">
              {this.sort(this.filter(this.state.cards)).map((item, i) => (
                <LazyLoad height={100}>
                  <MediaCard
                    key={i}
                    points={item.points + " points"}
                    name={item.name}
                    image={item.image_url}
                  />
                </LazyLoad>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  sort(obj) {
    if (this.state.lohi) {
      return obj.sort((a, b) => parseFloat(a.points) - parseFloat(b.points));
    } else {
      return obj.sort((a, b) => parseFloat(b.points) - parseFloat(a.points));
    }
  }

  filter(obj) {
    if (this.state.currentCategory === "all") {
      return obj;
    } else {
      return obj.filter(
        (prize) => prize.category === this.state.currentCategory
      );
    }
  }
}

export default Store;
