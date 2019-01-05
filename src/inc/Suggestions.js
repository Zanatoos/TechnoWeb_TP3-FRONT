import React from 'react';
import './../App.css';

const Suggestions = (props) => (
    <div className="App-list">
      <h1 className="selectedSongs-title"> Songs List </h1>
      <ul>
        {props.suggestions.length > 0 && props.printArr(props.suggestions)}
      </ul>
    </div>
);

export default Suggestions;
