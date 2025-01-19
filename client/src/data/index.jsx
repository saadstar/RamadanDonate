import moment from "moment/moment";





export const ordersData = [
  {
    name: "أرز",
    type: "مواد غذائية",
    items: 5, // 5 كجم
    change: 250, // 250 جنيه
  },
  {
    name: "سكر",
    type: "مواد غذائية",
    items: 3, // 3 كجم
    change: 180, // 180 جنيه
  },
  {
    name: "زيت نباتي",
    type: "مواد غذائية",
    items: 2, // 2 لتر
    change: 300, // 300 جنيه
  },
  {
    name: "تمر",
    type: "مواد غذائية",
    items: 2, // 2 كجم
    change: 220, // 220 جنيه
  },
  {
    name: "مكرونة",
    type: "مواد غذائية",
    items: 3, // 3 أكياس
    change: 150, // 150 جنيه
  },
  {
    name: "عدس",
    type: "مواد غذائية",
    items: 1, // 1 كجم
    change: 120, // 120 جنيه
  },
  {
    name: "صلصة الطماطم",
    type: "مواد غذائية",
    items: 3, // 3 علب
    change: 100, // 100 جنيه
  },
  {
    name: "شاي",
    type: "مشروبات",
    items: 1, // 1 عبوة
    change: 50, // 50 جنيه
  },
  {
    name: "لبن بودرة",
    type: "مواد غذائية",
    items: 1, 
    change: 200, 
  },
  {
    name: "ملح",
    type: "مواد غذائية",
    items: 1, // 1 عبوة صغيرة
    change: 30, // 30 جنيه
  },
];

//* get the value in group number format
export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};


//* calendar Events
let eventGuid = 0
let todayStr = moment().format("YYYY-MM-DD")  // YYYY-MM-DD of today
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