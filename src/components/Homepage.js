import React from "react";
import NavBar from "./NavBar.js";
import Promotions from "./Promotions.js";
import MediaCard from "./Store.js";
function HomePage(props) {
  return (
    <div>
      <NavBar />
      <Promotions />
      <MediaCard />
    </div>
  );
}

export default HomePage;
