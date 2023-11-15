import React, { useState } from 'react';
import MachineEvent from './MachineEvent';

const Machine = ({ machine }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`table-row ${open ? 'open' : ''}`}>
      <div className="column machine-name" onClick={() => setOpen(!open)}>
        {machine.name}
      </div>
      {open && (
        <>
          <div className="nestedcolumn">
            {machine.events.map((machineEvent) => (
              <MachineEvent key={machineEvent.id} machineEvent={machineEvent} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Machine;
