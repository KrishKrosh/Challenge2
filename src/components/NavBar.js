import React from "react";

import { Typography, Paper, Avatar, Button } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

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
import SearchBar from 'material-ui-search-bar'
render() ;
  return(
    <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
    />
  )
  


const styles = (theme) => ({
  main: {
    width: "auto",
    display: "block", 
  },
  paper: {
    display: "flex",
    flex: 3,
    flexDirection: "row",
    height: 60,
    padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 3}px ${
      theme.spacing.unit * 1
    }px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: 2,
    float: "right",
  },
  submit: {},
});



function NavBar(props) {
  const { classes } = props;

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

export default NavBar}
