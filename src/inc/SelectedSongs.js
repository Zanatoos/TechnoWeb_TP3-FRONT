import React from 'react';
import './../App.css';

const SelectedSongs = (props) => (
    <div className="App-selectedSongs">
      <h1 className="selectedSongs-title"> Selected Songs </h1>
      <ul>
        {props.printArr(props.selectedSongs)}
      </ul>
    </div>
);

export default SelectedSongs;
