import React from "react";
import NavBar from "./NavBar.js";
import Promotions from "./Promotions.js";
import MediaCard from "./Store.js"
function HomePage(props) {
  return (
    <React.Fragment>
      <NavBar />
      <Promotions />
      <MediaCard/>
    </React.Fragment>
  );
}

export default HomePage;
