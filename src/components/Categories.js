import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./styles.css";
import HorizontalScroller from "react-horizontal-scroll-container";
import React, { Component } from "react";

class Categories extends Component {
  render() {
    return (
      <div>
        <HorizontalScroller>
          <Button
            variant="contained"
            color="secondary"
            className="categoryButton"
          >
            Laptops
          </Button>
        </HorizontalScroller>
      </div>
    );
  }
}

export default Categories;
