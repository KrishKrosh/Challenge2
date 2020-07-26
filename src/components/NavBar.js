import {
  Typography,
  Paper,
  Button,
  TextField,
  InputAdornment,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Paper elevation={0.5} className="navbarPaper">
        <Typography component="h3" variant="h4">
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

export default NavBar;
