import React, { Component } from "react";
import NavBar from "./NavBar";
import PlayList from "./PlayList";
import PlayListForm from "./PlayListForm";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      songTitle: "",
      songArtist: "",
      songNotes: "none"
    };
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="row">
          <div className="col-sm-6">
            <PlayListForm
              userName={this.state.userName}
              songTitle={this.state.songTitle}
              songArtist={this.state.songArtist}
              songNotes={this.state.songNotes}
            />
          </div>

          <div className="col-sm-6">
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
