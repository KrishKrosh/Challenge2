import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./styles.css";

const styles = (theme) => ({})


function MediaCard() {
  return (
    <div>
      <br/>
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
            <br/>
            <Typography variant="body1" component="h6" className="redeem">
              Redeem Now
            </Typography>
          </CardContent>
          </CardActionArea>
      </Card>

      <br/>
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
            <br/>
            <Typography variant="body1" component="h6" className="redeem">
              Redeem Now
            </Typography>
          </CardContent>
          </CardActionArea>
      </Card>
      <br/>
    </div>
  );
}

















function Categories() {
  return (
    <div>
      <br/>
      <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
        >
          Laptops
        </Button>



    </div>
  );
}


export default MediaCard;
