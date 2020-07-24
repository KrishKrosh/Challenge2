import React from "react";
import Categories from "./Categories.js";
import MediaCard from "./Card.js";

function Store(props) {
  return (
    <div>
      <Categories />
      <MediaCard />{" "}
    </div>
  );
}

export default Store;
