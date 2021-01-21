// Object with information about rooms

export const allRooms = [
  {
    id: 1,
    name: "Living Room",
    numberOfUsers: 3,
    isActive: true,
    devices: [
      {
        id: 1,
        name: "Lamp",
        bulkToggleAllowed: true,
        isActive: true,
        parameter: {
          name: "Brightness",
          type: "percent",
          value: "50",
          minValue: "0",
          maxValue: "100",
        },
      },
      {
        id: 2,
        name: "TV",
        bulkToggleAllowed: true,
        isActive: false,
        parameter: {
          name: "Volume",
          type: "percent",
          value: "20",
          minValue: "0",
          maxValue: "100",
        },
      },
    ],
  },
  {
    id: 2,
    name: "Kitchen",
    numberOfUsers: 3,
    isActive: true,
    devices: [
      {
        id: 1,
        name: "Fridge",
        bulkToggleAllowed: false,
        isActive: true,
        parameter: {
          name: "Temperature",
          type: "celsius",
          value: "-8",
          minValue: "-12",
          maxValue: "-2",
        },
      },
    ],
  },
  {
    id: 3,
    name: "Bed Room",
    numberOfUsers: 3,
    isActive: true,
    devices: [
      {
        id: 1,
        name: "Lamp",
        bulkToggleAllowed: true,
        isActive: true,
        parameter: {
          name: "Brightness",
          type: "percent",
          value: "50",
          minValue: "0",
          maxValue: "100",
        },
      },
    ],
  },
];
