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
                >
                  Redeem Event
                </Button>
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
