// Задание 1
"use strict";
  function getArrayParams(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = 0;
    let avg;

      for (let i = 0; i < arr.length; ++i) {
        // if (max < arr[i]) {
        //   max = arr[i];
        // } else if (min > arr[i]) {
        //   min = arr[i];
        // }
      sum += arr[i];
      }
    avg = sum/arr.length;

    return { 
      min: min, 
      max: max, 
      avg: +avg.toFixed(2) // + здесь для преобразования к числу
      };
  }
 console.log(getArrayParams([-99, 99, 10]));

// Задание 2
function worker(arr) {            // nasadka myasorubki
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
      sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, worker) {
  let max = 0;
    for(let i = 0; i < arrOfArr.length; ++i) {
      let result = worker(arrOfArr[i]);
      if (result > max) {
        max = result;
      }
    }
    return max;
}
makeWork([[1, 2, 3, 4], [10, 20, -10, -20]], worker);


// Задание 3

function worker2(arr) {    
  return (Math.max(...arr)-Math.min(...arr));
}

