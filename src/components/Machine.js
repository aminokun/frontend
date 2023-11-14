import React, { useState } from 'react';
import MachineEvent from './MachineEvent';

const Machine = ({ machine }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="table-row">
      <div className="column machine-name" onClick={() => setOpen(!open)}>
        {machine.name} {open ? '▼' : '▶'}
      </div>
      {open && (
        <div className="column events">
          {machine.events.map((machineEvent) => (
            <MachineEvent key={machineEvent.id} machineEvent={machineEvent} />
          ))}
        </div>
      )}
      <div className="column parameters">
        {/* Empty div to align with the table layout */}
      </div>
    </div>
  );
};

export default Machine;
