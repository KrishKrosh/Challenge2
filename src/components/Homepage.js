import React from "react";
import NavBar from "./NavBar.js";
import Promotions from "./Promotions.js";
import Categories from "./Categories.js";
import MediaCard from "./Card.js";

function HomePage(props) {
  return (
    <div>
      <NavBar />
      <Promotions />
      <Categories />
      <MediaCard />{" "}
    </div>
  );
}

export default HomePage;
