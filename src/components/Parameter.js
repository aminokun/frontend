import React from 'react';

const Parameter = ({ parameter }) => (
  <div className="table-row">
    <div className="column machine-name">
      {/* Empty div to align with the table layout */}
    </div>
    <div className="column events">
      {/* Empty div to align with the table layout */}
    </div>
    <div className="column parameters">
      <p>{parameter.name}</p>
    </div>
  </div>
);

export default Parameter;
