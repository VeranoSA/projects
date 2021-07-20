module.exports = function mostProfitableDepartment(salesData) {
  var profitable = {};
  for (var i = 0; i < salesData.length; i++) {
      var department = salesData[i].department;
      if (profitable[department] === undefined) {
          profitable[department] = 0;
      } else {
          profitable[department] += salesData[i].sales;
      }
  }
  // console.log(profitable)
  var departments = '';
  var total = 0;
  for (var dep in profitable) {
      //console.log(profitable[dep])
      if (profitable[dep] > total) {
          departments = dep;
          total = profitable[dep]
      }
  }
  // console.log(departments)
  return departments
}

















