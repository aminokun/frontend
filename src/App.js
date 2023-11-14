import React from 'react';
import Machine from './components/Machine';
import machinesData from './data/machinesData';
import './App.css'; // Include the CSS file for styling

function App() {
  return (
    <div className="App">
      <div className="table-header">
        <div className="column">Machine Name</div>
        <div className="column">Events</div>
        <div className="column">Parameters</div>
      </div>
      {machinesData.map((machine) => (
        <Machine key={machine.id} machine={machine} />
      ))}
    </div>
  );
}

export default App;
