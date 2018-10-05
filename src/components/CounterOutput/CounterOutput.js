import React from 'react';

import './CounterOutput.css';

const counterOutput = (props) => (
    <div className="CounterOutput">
       Current Count: {props.value}
    </div>
);

export default counterOutput;