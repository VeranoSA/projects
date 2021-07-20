module.exports = function totalPhoneBill(callSms){
		var arr = callSms.split(",");
	   var call = 0;
        var sms = 0;
  	for (var i = 0;i < arr.length;i++){
    var trimCall = arr[i].trim();
    if (trimCall.startsWith("call")){
      		call++;
    }
    if (trimCall.startsWith("sms")){
        	sms++;
        }
        var smsCall = ((sms * 0.65) + (call *2.75));
      	var smsCall = smsCall.toFixed(2);
    }
  return "R" + smsCall;
}
