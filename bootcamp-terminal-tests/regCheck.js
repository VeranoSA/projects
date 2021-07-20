module.exports = function regCheck(car, location) {

  if (car.endsWith("GP") && location.endsWith("GP") || (car.endsWith("EC") && location.endsWith("EC") || (car.endsWith("MP") && location.endsWith("MP")|| (car.endsWith("L") && location.endsWith("L"))))){
    return true;
}
  else {
    return false;
}
}
