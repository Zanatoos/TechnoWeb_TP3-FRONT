import React from 'react';

const Autofilled = (param) => (
    <div>
         <li className="item-list" onClick={(e) => { param.handleAddOption(param.option)} }>{param.option}</li>
    </div>
);

export default Autofilled;
