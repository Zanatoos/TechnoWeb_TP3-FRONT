import React from 'react';
import './../App.css';

const Submit = (param) => (
    <button
        type="button"
        className="submit"
        onClick={param.handleDisplayResult}
    >
        Print
    </button>
);

export default Submit;
