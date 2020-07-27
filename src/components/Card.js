import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";
import "./styles.css";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

//<Link component={RouterLink} to='/login'></Link>
//</Link>

class MediaCard extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };
  }
  render() {
    return (
      <div>
        <Card className="card" id={this.props.id}>
          <CardActionArea
            className="cardHover"
            onClick={() => this.setState({ open: true })}
          >
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
        {/* <Dialog
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Confirmation"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to redeem this prize?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.setState({ open: false })} color="primary">
              No
            </Button>
            <Button
              onClick={() => this.setState({ open: false })}
              color="primary"
              autoFocus
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog> */}
      </div>
    );
  }
}

export default MediaCard;
