import React, { Component } from "react";
import logo from "../logo.svg";

class NavBar extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>
          <img src={logo} className="App-logo" alt="logo" />
          <strong>Enter a song!</strong>
          <img src={logo} className="App-logo" alt="logo" />
        </h1>
      </div>
    );
  }
}

export default NavBar;
