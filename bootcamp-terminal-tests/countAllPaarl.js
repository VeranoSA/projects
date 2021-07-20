module.exports = function countAllPaarl(regNo){
var numOfPaarl = 0
var arr = regNo.split(", ")
	for(var i = 0;i <arr.length;i++){
    	var trimReg = arr[i].trim();
      if(trimReg.startsWith("CJ")){
      		numOfPaarl++;
      }
    }
  return numOfPaarl;
}
