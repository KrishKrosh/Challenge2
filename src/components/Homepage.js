import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import NavBar from "./NavBar.js";
import Promotions from "./Promotions.js";

function HomePage(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <NavBar />
      <Promotions />
    </React.Fragment>
  );
}

export default HomePage;
