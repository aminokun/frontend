import React, { useState } from 'react';
import Parameter from './Parameter';

const MachineEvent = ({ machineEvent }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="table-row">
      <div className="column events" onClick={() => setOpen(!open)}>
        {machineEvent.name}
      </div>
      {open && (
        <div className='nestednestedcolumn'>
          {machineEvent.parameters.map((param) => (
            <Parameter key={param.id} parameter={param} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MachineEvent;