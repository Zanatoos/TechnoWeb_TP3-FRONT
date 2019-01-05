import React, {Component} from 'react';
//import { allSongs } from './../songs';
import './../App.css';
import Suggestions from './Suggestions';
import SelectedSongs from './SelectedSongs';

import axios from 'axios';

export default class Layout extends Component {

    constructor(props) {
        super(props);

        //this.songs = [...allSongs];

        this.state = {
            suggestions: [],
            text: ''
        };
    }

    onChange = (e) => {
        const partSongs = e.target.value;

        axios.get(`http://localhost:8081/${partSongs}`)
          .then(res => {
            const songs = res.data;
            console.log(songs);
            this.setState(() =>({suggestions: songs, text:partSongs}));
          })
          .catch( error => {
            console.log(error.response.status);
            this.setState(() =>({suggestions: [], text:''}));
          })
    }


    printArr = (arr) => {
      return arr.map( (el) =>
        (<li className="item-list" onClick={(e) => this.props.handleSuggestions(el)}>{el}</li>)
      );

    }

    printList = () => {
      alert(this.props.selectedSongs.join(", \n"));
    }


    render () {
        return (
          <div className="App-search">
              <input className="input" value={this.state.text} onChange={this.onChange} type="text" />
              <button type="button" className="submit" onClick={this.printList}>
                  Print List
              </button>
              <Suggestions
                suggestions = {this.state.suggestions}
                printArr = {this.printArr}
              />

              <SelectedSongs
                selectedSongs = {this.props.selectedSongs}
                printArr = {this.printArr}
              />
          </div>
        )
    }
}
