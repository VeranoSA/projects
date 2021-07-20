let assert = require('assert');
let findItemsOver = require('../findItemsOver')

describe('The findItemsOver function', function () {
    /*Test Case One*/
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
  
    var results1= [
        {name : 'apples', qty : 10}, 
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
  ];
  /*Test Case Two*/
    var itemList2 = [
      {name : 'bmw', qty : 18},
      {name : 'volkswagen', qty : 27},
      {name : 'nissan', qty : 9},
    ]
  
    var results2= [

  ];
  /*Test Case Three*/
    var itemList3= [
  
  ];
  
    var results3= [
  
  ];
        it('should return all the products that have a quantity higher than the threshold', function () {
            assert.deepEqual(results1,findItemsOver(itemList, 4));
          });
  
        it('should return nothing if theres no quantity higher than threshold', function () {
            assert.deepEqual(results2,findItemsOver(itemList2, 28));
          });
  
        it('should return nothing if the item list is Empty', function () {
            assert.deepEqual(results3,findItemsOver(itemList3));
          }); 
    });
  