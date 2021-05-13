function calculateBill(){
  var billTotal = 0;

function billCalculate(billString){

  var billItems = billString.split(",");
  var billTotal1 = 0;
  for (var i=0;i<billItems.length;i++){
      var billItem = billItems[i].trim();
      if (billItem === "call"){
          billTotal += 2.75;
          billTotal1 += 2.75;
      }
      else if (billItem === "sms"){
          billTotal += 0.75;
          billTotal1 += 0.75;
      }
  }
  return billTotal1
}
function getTotalCost(){
  return billTotal;
}
function totalClassName(Ncebakazi){
  if(Ncebakazi >= 20 && Ncebakazi <= 30){
      return 'warning';
  }
  if (Ncebakazi >= 30){
      return 'danger';
  }
}

return {
  billCalculate,
  getTotalCost,
  totalClassName
}
}