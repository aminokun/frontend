import React from 'react';
import machinesData from './data/machinesData';
import ASMLData from './data/ASMLData';
import './App.css';
import MachineContainer from './components/MachineContainer';

function App() {
  return (
    <div className="App">
      <MachineContainer machines={machinesData} />
    </div>
  );
}

export default App;
