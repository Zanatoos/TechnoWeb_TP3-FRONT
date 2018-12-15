import React, {Component} from 'react';
import { allSongs } from './../songs';
import Autofilled from './Autofilled';
import './../App.css';

export default class Input extends Component {

    constructor(props) {
        super(props);

        this.songs = [...allSongs];

        this.state = {
            suggestions: [],
            text: ''
        };
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];

        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.songs.sort().filter(v => regex.test(v));
        }

        this.setState(() => ({ suggestions, text: value }));
    }

    render () {
        return (
            <div>
              <input className="input" value={this.state.text} onChange={this.onTextChanged} type="text" />
              <div className="list">
              {!(this.state.suggestions.length === 0) &&
                  <ul>
                      {this.state.suggestions.map((song) => (
                          <Autofilled
                              option={song}
                              handleAddOption={this.props.handleAddOption}
                          />
                      )
                      )}
                  </ul>
              }
              </div>
            </div>
        )
    }
}
