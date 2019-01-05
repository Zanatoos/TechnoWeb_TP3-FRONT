import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './inc/Layout';

class App extends Component {


  constructor(props) {
    super(props)

    this.state = {
      selectedSongs: []
    };
  }

  handleSuggestions = (el) => {
    const reg = new RegExp(`${el}`, "i");
    if(this.state.selectedSongs.indexOf(el) != -1) {
      this.setState( (oldState) => ({
        selectedSongs: oldState.selectedSongs.filter(val => val.localeCompare(el))
      }));
    } else {
      this.setState( (oldState) => ({
        selectedSongs: oldState.selectedSongs.concat(el)
      }));
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Techno Web - Queen Songs List </h2>
        </header>
        <section className="App-section">
          <Layout
            handleSuggestions = {this.handleSuggestions}
            selectedSongs = {this.state.selectedSongs}
          />

        </section>
      </div>
    );
  }
}

export default App;
