
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./styles.css";
import HorizontalScroller from 'react-horizontal-scroll-container';
import React, { Component } from 'react';


class Example extends Component {
  render() {
    return (
      <div>
        <br/>
        <HorizontalScroller>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          padding="20px"
        >
          Laptops
        </Button>
        <br/>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
        >
          Laptops
        </Button>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          marginLeft={10}
          marginRight={10}
          to="/"
        >
          Laptops         <br/> .
        </Button>

        <br/>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
        >
          Laptops
        </Button>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
        >
          Laptops
        </Button>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
        >
          Laptops
        </Button>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
        >
          Laptops
        </Button>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
        >
          Laptops
        </Button>

          
        </HorizontalScroller>
      </div>
    );
  }
}




export default Example;
