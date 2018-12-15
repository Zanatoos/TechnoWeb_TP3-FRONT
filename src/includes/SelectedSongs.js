import React from 'react';
import './../App.css';

const SelectedSongs = (param) => (
    <div className="selectedSongs">
      {!param.list.length == 0 && <h1 className="selectedSongs-title"> Selected Songs </h1>}
      <ol>
          {param.list.map((el) => ( <li className="item-list" onClick={(e) => {param.handleAddOption(el)}}>{el}</li>))}
      </ol>
    </div>
);

export default SelectedSongs;
