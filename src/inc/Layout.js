import React, {Component} from 'react';
import { allSongs } from './../songs';
import './../App.css';
import Suggestions from './Suggestions';
import SelectedSongs from './SelectedSongs';

export default class Layout extends Component {

    constructor(props) {
        super(props);

        this.songs = [...allSongs];

        this.state = {
            suggestions: this.songs,
            text: ''
        };
    }

    onChange = (e) => {
        const val = e.target.value;
        const reg = new RegExp(`${val}`, 'i');
        let suggestions = this.songs.filter( x => x.match(reg));

        this.setState(() =>({suggestions, text:val}));
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
