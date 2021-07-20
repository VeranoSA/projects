module.exports = function countAllFromTown(regNo, regStart){
var numPlates = 0;
var arr = regNo.split(",");

for (var i = 0;i < arr.length;i++){
  		var trimReg = arr[i].trim();
	if(trimReg.startsWith(regStart)){
       		numPlates++;
       }
   }
       return numPlates;
}
