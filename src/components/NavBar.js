import {
  Typography,
  Paper,
  Button,
  TextField,
  InputAdornment,
  CircularProgress,
  Avatar,
  Menu,
  MenuItem,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SearchIcon from "@material-ui/icons/Search";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import firebase from "../firebase.js";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      anchorEl: null,
      open: false,
      // confirm: false,
      userInfo: {},
    };
  }

  createNavbar() {
    if (this.props.uid !== null) {
      this.getUserInfo();
      return (
        <React.Fragment>
          {this.state.isLoading ? (
            <CircularProgress />
          ) : (
            <Paper elevation={0.5} className="navbarPaper">
              <Typography component="h5" variant="h4">
                YC Store
              </Typography>
              <TextField
                className="navbarSearch"
                onChange={(e) => this.props.onChange(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <div className="loggedInNavBar">
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  className="loggedInNavBarItem"
                  onClick={() => this.setState({ open: true })}
                >
                  Redeem Event
                </Button>
                <Dialog 
                  open={this.state.open}
                  onClose={() => this.setState({ open: false})} 
                  aria-labelledby="form-dialog-title">
        <DialogTitle 
          id="form-dialog-title">
            Redeem Event
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your code.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Redeem Code"
            type="code"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => this.setState({ open: false })} 
            color="primary">
            Cancel
          </Button>
          <Button 
            // onClick={() => this.setState({ confirm: true })}
            onClick={() => this.setState({ open: false, confirm: true })} 
            color="primary">
            Submit
          </Button>
          
        </DialogActions>
      </Dialog>
                <Avatar className="loggedInNavBarItem3">
                  {this.state.userInfo.points}
                </Avatar>
                <h5
                  className="loggedInNavBarItem2"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={(event) =>
                    this.setState({ anchorEl: event.currentTarget })
                  }
                >
                  {this.state.userInfo.name}
                </h5>{" "}
              </div>
              <Menu
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                keepMounted
                open={Boolean(this.state.anchorEl)}
                onClose={() => this.setState({ anchorEl: null })}
              >
                <MenuItem onClick={() => this.logout()}>Logout</MenuItem>
              </Menu>
            </Paper>
          )}
        </React.Fragment>
      );
    } else {
      return (
        <Paper elevation={0.5} className="navbarPaper">
          <Typography component="h5" variant="h4">
            YC Store
          </Typography>
          <TextField
            className="navbarSearch"
            onChange={(e) => this.props.onChange(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            component={Link}
            to="/login"
            className="navbarItem"
          >
            Sign In
          </Button>
        </Paper>
      );
    }
  }

  render() {
    return <React.Fragment>{this.createNavbar()}</React.Fragment>;
  }

  getUserInfo() {
    fetch("https://api.youthcomputing.ca/users/" + this.props.uid, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      // ...then we update the users state
      .then((info) =>
        this.setState({
          userInfo: info.userData,
          isLoading: false,
        })
      )
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  logout() {
    firebase.logout();
    this.props.onLogout();
    this.setState({ anchorEl: null });
  }
}

export default NavBar;
