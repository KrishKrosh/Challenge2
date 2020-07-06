import React from "react";
import NavBar from "./NavBar.js";
import Promotions from "./Promotions.js";

function HomePage(props) {
  return (
    <React.Fragment>
      <NavBar />
      <Promotions />
    </React.Fragment>
  );
}

export default HomePage;
