const machinesData = [
  {
    id: 1,
    name: 'Machine 1',
    events: [
      {
        id: 101,
        name: 'Event 123',
        parameters: [
          { id: 1001, name: 'Param 123' },
          { id: 1002, name: 'Param 223' },
        ],
      },
      {
        id: 101,
        name: 'Event 124',
        parameters: [
          { id: 1001, name: 'Param 124' },
          { id: 1002, name: 'Param 224' },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Machine 2',
    events: [
      {
        id: 201,
        name: 'Event 1',
        parameters: [
          { id: 2001, name: 'Param 1' },
          { id: 2002, name: 'Param 2' },
        ],
      },
      // More events for Machine 2
    ],
  },
  // More machines
];

export default machinesData;
