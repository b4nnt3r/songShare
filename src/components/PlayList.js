import React, { Component } from "react";
import PlayListItem from "./PlayListItem";

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = { songs: [] };
  }

  fetchData = e => {
    e.preventDefault();
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ songs: data });
      });
  };

  componentDidMount() {
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting")
      .then(results => {
        return results.json();
      })
      .then(songs => {
        this.setState({ songs });
        console.log("state", this.state.songs);
      });
  }

  render() {
    return (
      <div>
        <h1>Playlists:</h1>
        <input
          type="button"
          className="btn btn-outline-primary"
          onClick={this.fetchData}
          value="update"
        />
        <div className="play-list">
          <PlayListItem songRender={this.state} onClick={this.fetchData} />
        </div>

      </div>
    );
  }
}

export default PlayList;
