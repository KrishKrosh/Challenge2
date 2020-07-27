import React, { Component } from "react";
import MediaCard from "./Card.js";
import { CircularProgress, Button } from "@material-ui/core";
import HorizontalScroller from "react-horizontal-scroll-container";
import SwapVertIcon from "@material-ui/icons/SwapVert";
import { Waypoint } from 'react-waypoint';

class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      categories: {},
      isLoading: true,
      currentCategory: "all",
      lohi: false,
      rawCards:[],
    };
  }

  componentDidMount() {
    this.getCards();
  }
  getCards() {
    fetch("https://api.youthcomputing.ca/shop/prizes", {
      method: "GET",
      
    })
      .then((response) => response.json())
      // ...then we update the users state
      .then((cards) =>
        this.setState({
          rawCards: cards.prizes,
          categories: [...new Set(cards.prizes.map((x) => x.category))],
          isLoading: false,
          cards: cards.prizes.slice(
            0,5
          ),
        })
      )
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }
  addCards(){
    console.log("adding more cards")
  }
  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <div className="loader">
            <CircularProgress />
          </div>
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
              {this.sort(this.search(this.filter(this.state.cards))).map(
                (item, i) => {
                  if (i == this.state.cards.length-1) {
                    return (<Waypoint onEnter={this.addCards}>
                     <MediaCard
                    key={i}
                    points={item.points + " points"}
                    name={item.name}
                    image={item.image_url}
                  />
                    </Waypoint>)
                  } 
                  else{
                    return <MediaCard
                    key={i}
                    points={item.points + " points"}
                    name={item.name}
                    image={item.image_url}
                  />
                  }
                    
                  
                }
              )}
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

  search(obj) {
    if (this.props.searchTerm === "") {
      return obj;
    } else {
      return obj.filter((prize) =>
        prize.name.toLowerCase().includes(this.props.searchTerm.toLowerCase())
      );
    }
  }
}

export default Store;
