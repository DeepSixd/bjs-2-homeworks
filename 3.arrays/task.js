"use strict";
function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length !== arr2.length) {
    return false;
  }

  
  arr1.every(function(element, index) {
    result = element === arr2[index]
  });
  return result;
}
  
console.log(compareArrays([8,1,2], [8,1,2]));
  


function advancedFilter(arr) {

  let resultArr = arr.filter((item) => item > 0)
                     .filter((item) => item %3  === 0)
                     .map((item) => (item * 10));

  return resultArr; // array
}
