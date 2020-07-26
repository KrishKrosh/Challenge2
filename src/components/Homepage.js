import React, { Component } from "react";
import NavBar from "./NavBar.js";
import Promotions from "./Promotions.js";
import Store from "./Store.js";
import Footer from "./Footer.js";

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      search: "",
    };
  }

  render() {
    return (
      <div>
        <NavBar onChange={(value) => this.setState({ search: value })} />
        <Promotions />
        <Store searchTerm={this.state.search} />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
