function calculateBill(){
  var billTotal = 0;

function billCalculate(billString){

  var billItems = billString.split(",");

  for (var i=0;i<billItems.length;i++){
      var billItem = billItems[i].trim();
      if (billItem === "call"){
          billTotal += 2.75;
      }
      else if (billItem === "sms"){
          billTotal += 0.75;
      }
  }
}
function getTotalCost(){
  return billTotal;
}
function totalClassName(){
  if(getTotalCost() >= 20 && getTotalCost() <= 30){
      return 'warning';
  }
  if (getTotalCost() >= 30){
      return 'danger';
  }
}

return {
  billCalculate,
  getTotalCost,
  totalClassName
}
}