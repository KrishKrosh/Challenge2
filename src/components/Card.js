import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";
import "./styles.css";

class MediaCard extends Component {
  render() {
    return (
      <div>
        <br />
        <Card className="card" id={this.props.id}>
          <CardActionArea className="cardHover">
            <CardContent>
              <CardMedia component="img" image={this.props.image} />
              <br />
              <Typography gutterBottom className="cardName">
                {this.props.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.points}
              </Typography>
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
