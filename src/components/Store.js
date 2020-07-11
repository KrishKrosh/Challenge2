import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./styles.css";

export default function MediaCard() {
  return (
    <div>
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
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
