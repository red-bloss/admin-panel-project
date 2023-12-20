import moment from "moment/moment";

export const cardsData = [
  {
    title: "Revenue",
    change: 17,
    amount: 42456,
  },
  {
    title: "Orders",
    change: -7,
    amount: 50425.03,
  },
  {
    title: "Expenses",
    change: 13,
    amount: 1201.5,
  },
  {
    title: "Profit",
    change: 11,
    amount: 19026.0,
  },
];

export const ordersData = [
  {
    name: "Skatebnoard",
    type: "Illustration",
    items: 58,
    change: 290,
  },
  {
    name: "Language courses",
    type: "Illustration",
    items: 12,
    change: 72
  },
  {
    name: "Office Collaboration",
    type: "Illustration",
    items: 7,
    change: 70
  },
  {
    name: "Robot",
    type: "Illustration",
    items: 21,
    change: 15
  }
]


// get the value in group number format
export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};


// calendar Events
let eventGuid = 0
let todayStr = moment().format("YYYY-MM-DD")  
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Lunch Pary',
    start: todayStr + 'T09:00:00',

  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T16:00:00'
  },
  {
    id: createEventId(),
    title: "Head Meetup",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T20:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00'
  },
  {
    id: createEventId(),
    title: "Payment Shedules",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
]

export function createEventId() {
  return String(eventGuid++)
}


// tasks
export const boardData = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Database Setup",
          description: "MySql Integration"
        },
        {
          id: 2,
          title: "Data Analytics",
          description: "Collect Data"
        },
      ]
    },
    {
      id: 2,
      title: "TODO",
      cards: [
        {
          id: 9,
          title: "Java EE",
          description: "Authenthication With Tokens",
        }
      ]
    },
    {
      id: 3,
      title: "Doing",
      cards: [
        {
          id: 10,
          title: "Full Your NoteBook",
          description: "Make new events in global states"
        },
        {
          id: 11,
          title: "React JS App",
          description: "Integration of API"
        }
      ]
    },
    {
      id: 4,
      title: "Completed",
      cards: [
        {
          id: 12,
          title: "Sales",
          description: "Make New Year Sales And Gifts"
        },
        {
          id: 13,
          title: "Structure Code",
          description: "Write Clean Code"
        }
      ]
    }
  ]
}


// * user table data
export const userData = [
  {
    name: {
      firstName: 'Ivan',
      lastName: 'Ivan',
    },
    address: '261 Titova',
    city: 'Almaty',
    state: 'Almaty',
  },
  {
    name: {
      firstName: 'Anne',
      lastName: 'Doe',
    },
    address: '56 Dominic Grove',
    city: 'London',
    state: 'UK',
  },
  {
    name: {
      firstName: 'John',
      lastName: 'John',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'One',
    },
    address: '722 One Home',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Mark',
    },
    address: '32188 Eduard Sqauze',
    city: 'Charleston',
    state: 'South Carolina',
  }, {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
]