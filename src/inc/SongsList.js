import React from 'react';

import axios from 'axios';

export default class SongsList extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          songs: []
      };
  }
  componentDidMount() {
    axios.get(`http://localhost:8081/${this.props.partSongs}`)
      .then(res => {
        const songs = res.data;
        this.setState({ songs });
      })
  }

  render() {
    return (
      <ul>
        { this.state.songs.map(song => <li class="suggestedSongs">{song}</li>)}
      </ul>
    )
  }
}
