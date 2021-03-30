function findItemsOver(fruitList, thresh){
var overThresh = [];
  for(i in fruitList){
  if(fruitList[i].qty > thresh){
  		overThresh.push(fruitList[i]);
  }
  }
  return overThresh;
}
var itemList = [
    {name : ‘apples’, qty : 10},
    {name : ‘pears’, qty : 37},
    {name : ‘bananas’, qty : 27},
    {name : ‘apples’, qty : 3},
];
