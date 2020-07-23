import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./styles.css";

class MediaCard extends Component {
  constructor() {
    super();

    this.state = {
      card: {},
      isLoading: true,
    };
  }
  componentDidMount() {
    this.getCard();
  }
  getCard(){
    fetch("https://api.youthcomputing.ca/shop/prizes", {
      method: "GET",
      mode: "cors",

  })
    .then((response) => response.json())
      // ...then we update the users state
      .then((card) =>
        this.setState({
          card: card.prizes,
          isLoading: false ,
        })
      )
      .catch((error) => {
        console.error("There was an error!", error);
      });
    }
  render() {
    return (
      <div>
        
        <br />
        <Card className="card">
          <CardActionArea>
            <CardContent>
              <CardMedia
                component="img"
                image="https://images.samsung.com/is/image/samsung/ca-uhdtv-nu7090-un50nu6900fxzc-frontblack-115122572?$PD_GALLERY_L_JPG$"
              />
              <Typography gutterBottom variant="h5" component="h2">
                TV
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                2000 points
              </Typography>
              <br />
              <Typography variant="body1" component="h6" className="redeem">
                Redeem Now
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default MediaCard;
