//leap year determination with date object
//if the year is evenly divisible by 4 , 100 and 400, it's a leap year.
var today = new Date();
var thisYear = today.getFullYear();

if ((thisYear % 4 === 0 && thisYear % 100 !== 0) || thisYear % 400 === 0) {
  console.log(thisYear + ' is a leap year.');
} else {
  console.log(thisYear + ' is not a leap year.');
}
