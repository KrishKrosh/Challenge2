import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    height: 300,
  },
  media: {
    height: 100,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.samsung.com/is/image/samsung/ca-uhdtv-nu7090-un50nu6900fxzc-frontblack-115122572?$PD_GALLERY_L_JPG$"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            TV
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            2000 points
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        
      </CardActions>
    </Card>
  );
}