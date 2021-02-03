// date object experiment
//calculate "yesterday"
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function calculateYesterday(today) {
  var yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  return daysOfWeek[yesterday.getDay()];
}
calculateYesterday(new Date());
