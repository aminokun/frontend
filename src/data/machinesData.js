const machinesData = [
  {
    id: 1,
    name: 'Machine 779075fc-38b0-4d01-ba1d-6cd340da9bd9',
    events: [
      {
        id: 1,
        name: 'E40-1106:PJSM:1:Initial-Queued',
        parameters: [
          { id: 1001, name: 'LotId' },
          { id: 1002, name: 'LotStateNr' },
        ],
      },
      {
        id: 2,
        name: 'E40-1106:PJSM:4:PreProcessing-Processing',
        parameters: [
          { id: 1001, name: 'LotId' },
          { id: 1002, name: 'LotStateNr' },
        ],
      },
      {
        id: 3,
        name: 'E40-1106:PJSM:6:Processing-FullyProcessed',
        parameters: [
          { id: 1001, name: 'LotId' },
          { id: 1002, name: 'LotStateNr' },
          { id: 1003, name: 'LotResult' },
        ],
      },
      {
        id: 4,
        name: 'LotProcessing:WaferStarted',
        parameters: [
          { id: 1001, name: 'LotId' },
          { id: 1002, name: 'WfrResult' },
        ],
      },
      {
        id: 5,
        name: 'LotProcessing:ImageStarted',
        parameters: [
          { id: 1001, name: 'ImgId' },
        ],
      },
      {
        id: 6,
        name: 'LotProcessing:ImageDone',
        parameters: [
          { id: 1001, name: 'ImgId' },
          { id: 1002, name: 'ImgDone' },
          { id: 1003, name: 'Comment' },
        ],
      },
      {
        id: 7,
        name: 'LotProcessing:WaferDone',
        parameters: [
          { id: 1001, name: 'LotId' },
          { id: 1002, name: 'WfrResult' },
          { id: 1003, name: 'LotSize' },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Machine d09f7a16-7a49-4e3c-b6fe-8c77e2168901',
    events: [
      {
        id: 1,
        name: 'E40-1106:PJSM:1:Initial-Queued',
        parameters: [
          { id: 1001, name: 'LotId' },
          { id: 1002, name: 'LotStateNr' },
        ],
      },
      {
        id: 2,
        name: 'E40-1106:PJSM:4:PreProcessing-Processing',
        parameters: [
          { id: 1001, name: 'LotId' },
          { id: 1002, name: 'LotStateNr' },
        ],
      },
      {
        id: 3,
        name: 'E40-1106:PJSM:6:Processing-FullyProcessed',
        parameters: [
          { id: 1001, name: 'LotId' },
          { id: 1002, name: 'LotStateNr' },
          { id: 1003, name: 'LotResult' },
        ],
      },
      {
        id: 4,
        name: 'LotProcessing:WaferStarted',
        parameters: [
          { id: 1001, name: 'LotId' },
          { id: 1002, name: 'WfrResult' },
        ],
      },
      {
        id: 5,
        name: 'LotProcessing:ImageStarted',
        parameters: [
          { id: 1001, name: 'ImgId' },
        ],
      },
      {
        id: 6,
        name: 'LotProcessing:ImageDone',
        parameters: [
          { id: 1001, name: 'ImgId' },
          { id: 1002, name: 'ImgDone' },
          { id: 1003, name: 'Comment' },
        ],
      },
      {
        id: 7,
        name: 'LotProcessing:WaferDone',
        parameters: [
          { id: 1001, name: 'LotId' },
          { id: 1002, name: 'WfrResult' },
          { id: 1003, name: 'LotSize' },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Machine a2c145b1-ec7e-4aa4-8f11-0b9523467f32',
    events: [
      {
        id: 1,
        name: 'E40-1106:PJSM:1:Initial-Queued',
        parameters: [
          { id: 1001, name: 'LotId' },
          { id: 1002, name: 'LotStateNr' },
        ],
      },
      {
        id: 2,
        name: 'E40-1106:PJSM:4:PreProcessing-Processing',
        parameters: [
          { id: 1001, name: 'LotId' },
          { id: 1002, name: 'LotStateNr' },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Machine 6f1c0fb3-93d9-4a2e-9d5a-22e0635e02b4',
    events: [
      {
        id: 1,
        name: 'E40-1106:PJSM:1:Initial-Queued',
        parameters: [
          { id: 1001, name: 'LotId' },
          { id: 1002, name: 'LotStateNr' },
        ],
      },
      {
        id: 2,
        name: 'E40-1106:PJSM:4:PreProcessing-Processing',
        parameters: [
          { id: 1001, name: 'LotId' },
          { id: 1002, name: 'LotStateNr' },
        ],
      },
    ],
  },
];

export default machinesData;
