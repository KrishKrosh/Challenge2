import React from "react";
import NavBar from "./NavBar.js";
import Promotions from "./Promotions.js";
import MediaCard from "./Store.js";
import Categories from "./Categories.js";
function HomePage(props) {
  return (
    <div>
      <NavBar />
      <Promotions />
      <Categories />
      <MediaCard />
    </div>
  );
}

export default HomePage;
