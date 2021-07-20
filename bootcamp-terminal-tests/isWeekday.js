module.exports = function isWeekday(weekdays) {
  if (weekdays.startsWith("Mon" || "Tues" || "Wed" || "Thurs" || "Fri")){
    return true;
}
  else {
    return false;
}
}
