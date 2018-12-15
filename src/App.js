import React, { Component } from 'react';
import logo from './logo.svg';
import Input from './includes/Input';
import Submit from './includes/Submit';
import SelectedSongs from './includes/SelectedSongs';
import './App.css';

class App extends Component {
  constructor(param) {
    super(param)

    this.state = {
      selectedSongs: []
    };
  }

  handleAddOption = (new_entry) => {

    if (!this.state.selectedSongs.includes(new_entry)) {
        this.setState((prevState) => ({
          selectedSongs: prevState.selectedSongs.concat(new_entry)
      }));

    } else {
        this.setState((prevState) => ({
          selectedSongs: prevState.selectedSongs.filter(song => !new_entry.includes(song))
        }));
    }

  }

  handleDisplayResult = () => {
    alert(this.state.selectedSongs.join(", \n"));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Techno Web - Queen Songs List </h2>
        </header>
        <section className="App-section">
          <div className="App-search">
            <Input
              handleAddOption={this.handleAddOption}
            />
            <Submit
              handleDisplayResult={this.handleDisplayResult}
            />
          </div>

          <SelectedSongs
            list={this.state.selectedSongs}
            handleAddOption={this.handleAddOption}
          />

        </section>
      </div>
    );
  }
}

export default App;
