import React, { Component } from "react";

export default class PlayListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    };
  }

  handleUserName = e => {
    this.setState({ userName: e.target.value });
  };

  handleSongArtist = e => {
    this.setState({ songArtist: e.target.value });
  };

  handleSongTitle = e => {
    this.setState({ songTitle: e.target.value });
  };

  handleSongNotes = e => {
    this.setState({ songNotes: e.target.value });
  };

  addToList = e => {
    e.preventDefault();
    this.setState({
      userName: e.target.value,
      songTitle: e.target.value,
      songArtist: e.target.value,
      songNotes: e.target.value
    });
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response, "yay");
      })
      .catch(err => {
        console.log(err, "boo!");
      });
    this.setState({
      userName: "",
      songNotes: "",
      songArtist: "",
      songTitle: ""
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Add a Listing:</h1>
        <br />

        <form>
          <div class="form-group">
            <label for="artist">Band / Artist: </label>
            <input
              type="text"
              placeholder="Enter Band/Artist"
              className="form-control"
              onChange={this.handleSongArtist}
              value={this.state.songArtist}
              id="artist"
            />
          </div>

          <div class="form-group">
            <label for="artist">User Name:</label>
            <input
              type="text"
              placeholder="Name or Username"
              className="form-control"
              onChange={this.handleUserName}
              value={this.state.userName}
              id="username"
            />
          </div>

          <div class="form-group">
            <label for="title">Title:</label>
            <input
              type="text"
              placeholder="Song Title"
              className="form-control"
              onChange={this.handleSongTitle}
              value={this.state.songTitle}
              id="title"
            />
          </div>

          <div class="form-group">
            <label for="notes">Notes:</label>
            <input
              type="text"
              placeholder="Song Notes"
              className="form-control"
              onChange={this.handleSongNotes}
              value={this.state.songNotes}
              id="notes"
            />
          </div>
          <br />
          <input
            type="submit"
            className="btn btn-outline-primary"
            onClick={this.addToList}
          />
        </form>
      </div>
    );
  }
}
