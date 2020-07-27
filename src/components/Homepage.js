import React, { Component } from "react";
import NavBar from "./NavBar.js";
import Promotions from "./Promotions.js";
import Store from "./Store.js";
import Footer from "./Footer.js";
import firebase from "../firebase.js";

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      search: "",
      user: null,
    };
  }
  componentDidMount() {
    (async () => {
      var user = await firebase.isLoggedIn();
      this.setState({ user: user.uid });
    })();
  }

  render() {
    return (
      <div className="background">
        <NavBar
          onChange={(value) => this.setState({ search: value })}
          onLogout={() => this.setState({ user: null })}
          uid={this.state.user}
        />
        <Promotions />
        <Store searchTerm={this.state.search} />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
