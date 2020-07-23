import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./styles.css";
import HorizontalScroller from "react-horizontal-scroll-container";

import { CircularProgress } from "@material-ui/core";
import React, { Component } from "react";

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      categories: {},
      isLoading: true,
    };
  }
  componentDidMount() {
    this.getCategories();
  }
  getCategories() {
    fetch("https://api.youthcomputing.ca/shop/prizes", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      // ...then we update the users state
      .then((categories) =>
        this.setState({
          categories: [...new Set(categories.prizes.map((x) => x.category))],
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
          <HorizontalScroller>
            {this.state.categories.map((item, i) => (
              <Button
                key={i}
                variant="contained"
                color="secondary"
                className="categoryButton"
              >
                {this.state.categories[i]}
              </Button>
            ))}
          </HorizontalScroller>
        )}{" "}
      </div>
    );
  }
}

export default Categories;
