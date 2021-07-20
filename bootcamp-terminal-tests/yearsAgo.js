module.exports = function yearsAgo(year){
	var a = new Date();
    var b = a.getFullYear();
   	var results = b - year;
  	return results;
}
