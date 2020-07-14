import React from "react";
import NavBar from "./NavBar.js";
import Promotions from "./Promotions.js";
import MediaCard from "./Card.js";
import Examples from "./Categories.js";

function HomePage(props) {
  return (
    <div>
      <NavBar />
      <Promotions />
      <Examples />
      <MediaCard />
    </div>
  );
}

export default HomePage;
