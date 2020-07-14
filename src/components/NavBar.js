import React from "react";
import {
  Typography,
  Paper,
  Button,
  TextField,
  InputAdornment,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import "./styles.css";

function NavBar() {
  return (
    <Paper elevation={0.5} className="navbarPaper">
      <Typography component="h3" variant="h4">
        YC Store
      </Typography>
      <TextField
        className="navbarSearch"
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

export default NavBar;
