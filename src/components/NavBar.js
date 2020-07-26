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

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: true,
      isLoading: true,
      anchorEl: null,
    };
  }

  createNavbar() {
    if (this.state.isLoggedIn) {
      return (
        <React.Fragment>
          {this.state.isloading ? (
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
                <Avatar className="loggedInNavBarItem3">999999</Avatar>
                <h5
                  className="loggedInNavBarItem2"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={(event) =>
                    this.setState({ anchorEl: event.currentTarget })
                  }
                >
                  Name Here
                </h5>{" "}
              </div>
              <Menu
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                keepMounted
                open={Boolean(this.state.anchorEl)}
                onClose={() => this.setState({ anchorEl: null })}
              >
                <MenuItem onClick={() => this.setState({ anchorEl: null })}>
                  Logout
                </MenuItem>
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
}

export default NavBar;
