//your JS code here. If required.
function daysOfAYear(year) {
const isLeapYear = (year % 4 === 0);
  
  // If it's divisible by 100, check if it's also divisible by 400 to confirm leap year
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      isLeapYear = true;
    } else {
      isLeapYear = false;
    }
  }
  
  // Return 366 days for leap years, otherwise 365 days
  return isLeapYear ? 366 : 365;
}