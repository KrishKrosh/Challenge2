import React from "react";
import NavBar from "./NavBar.js";
import Promotions from "./Promotions.js";
import Store from "./Store.js";
import Footer from "./Footer.js";

function HomePage(props) {
  return (
    <div>
      <NavBar />
      <Promotions />
      <Store />
      <Footer />
    </div>
  );
}

export default HomePage;
