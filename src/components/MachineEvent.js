import React, { useState } from 'react';
import Parameter from './Parameter';

const MachineEvent = ({ machineEvent }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h3 onClick={() => setOpen(!open)} style={{ cursor: 'pointer' }}>
        {machineEvent.name} {open ? '▼' : '▶'}
      </h3>
      {open && (
        <div>
          {machineEvent.parameters.map((param) => (
            <Parameter key={param.id} parameter={param} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MachineEvent;
