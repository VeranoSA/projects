let assert = require('assert');
let findItemsOver20 = require('../findItemsOver20')

describe('The findItemsOver20 function', function () {
  var itemList = [
      {name : 'apples', qty : 10},
      {name : 'pears', qty : 37},
      {name : 'bananas', qty : 27},
      {name : 'apples', qty : 3},
  ];

  var results1= [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

  var itemList2 = [
    {name : 'bmw', qty : 18},
    {name : 'volkswagen', qty : 27},
    {name : 'nissan', qty : 9},
  ]

  var results2= [
    {name : 'volkswagen', qty : 27},
];

  var itemList3= [

];

  var results3= [

];
      it('should return all the products that have a quantity higher than 20', function () {
          assert.deepEqual(results1,findItemsOver20(itemList));
        });

      it('should return all the products that have a quantity higher than 20', function () {
          assert.deepEqual(results2,findItemsOver20(itemList2));
        });

      it('should return nothing if the item list is Empty', function () {
          assert.deepEqual(results3,findItemsOver20(itemList3));
        }); 
  });
