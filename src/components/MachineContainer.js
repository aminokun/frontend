import React from 'react'
import Machine from './Machine'

const MachineContainer = ({ machines}) => {
  return (
      <div className='machine-container'>
          {machines.map((machine) => (
            <Machine key={machine.id} machine={machine}/>
        ))}
      </div>
  )
}

export default MachineContainer