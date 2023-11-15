const ASMLData = [
  {
    "DCP_ID": "779075fc-38b0-4d01-ba1d-6cd340da9bd9",
    "Name": "SMOKE_Template",
    "events": [
      {
        "eventID": "E40-1106:PJSM:1:Initial-Queued",
        "eventName": "Equipment/Exposure",
        "parameters": [
          {
            "parameter_ID": "0-779075fc-38b0-4d01-ba1d-6cd340da9bd9",
            "Name": "LotId"
          },
          {
            "parameter_ID": "1-779075fc-38b0-4d01-ba1d-6cd340da9bd9",
            "Name": "LotStateNr"
          }
        ]
      },
      {
        "eventID": "LotProcessing:ImageDone",
        "eventName": "Equipment/Exposure",
        "parameters": [
          {
            "parameter_ID": "10-779075fc-38b0-4d01-ba1d-6cd340da9bd9",
            "Name": "ImgId"
          },
          {
            "parameter_ID": "11-779075fc-38b0-4d01-ba1d-6cd340da9bd9",
            "Name": "ImgDone"
          },
          {
            "parameter_ID": "12-779075fc-38b0-4d01-ba1d-6cd340da9bd9",
            "Name": "Comment"
          }
        ]
      },
      {
        "eventID": "LotProcessing:WaferDone",
        "eventName": "Equipment/Exposure",
        "parameters": [
          {
            "parameter_ID": "13-779075fc-38b0-4d01-ba1d-6cd340da9bd9",
            "Name": "LotId"
          },
          {
            "parameter_ID": "14-779075fc-38b0-4d01-ba1d-6cd340da9bd9",
            "Name": "WfrResult"
          },
          {
            "parameter_ID": "15-779075fc-38b0-4d01-ba1d-6cd340da9bd9",
            "Name": "LotSize"
          }
        ]
      },
      {
        "eventID": "E40-1106:PJSM:4:PreProcessing-Processing",
        "eventName": "Equipment/Exposure",
        "parameters": [
          {
            "parameter_ID": "2-779075fc-38b0-4d01-ba1d-6cd340da9bd9",
            "Name": "LotId"
          },
          {
            "parameter_ID": "3-779075fc-38b0-4d01-ba1d-6cd340da9bd9",
            "Name": "LotStateNr"
          }
        ]
      },
      {
        "eventID": "E40-1106:PJSM:6:Processing-FullyProcessed",
        "eventName": "Equipment/Exposure",
        "parameters": [
          {
            "parameter_ID": "4-779075fc-38b0-4d01-ba1d-6cd340da9bd9",
            "Name": "LotId"
          },
          {
            "parameter_ID": "5-779075fc-38b0-4d01-ba1d-6cd340da9bd9",
            "Name": "LotStateNr"
          },
          {
            "parameter_ID": "6-779075fc-38b0-4d01-ba1d-6cd340da9bd9",
            "Name": "LotResult"
          }
        ]
      },
      {
        "eventID": "LotProcessing:WaferStarted",
        "eventName": "Equipment/Exposure",
        "parameters": [
          {
            "parameter_ID": "7-779075fc-38b0-4d01-ba1d-6cd340da9bd9",
            "Name": "LotId"
          },
          {
            "parameter_ID": "8-779075fc-38b0-4d01-ba1d-6cd340da9bd9",
            "Name": "WfrResult"
          }
        ]
      },
      {
        "eventID": "LotProcessing:ImageStarted",
        "eventName": "Equipment/Exposure",
        "parameters": [
          {
            "parameter_ID": "9-779075fc-38b0-4d01-ba1d-6cd340da9bd9",
            "Name": "ImgId"
          }
        ]
      }
    ]
  }
]
export default ASMLData;
