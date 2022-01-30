"use strict";
function solveEquation(a, b, c) {
    let arr = [];
    let D=b*Math.pow(b,1)-4*a*c;
    console.log(D);
    if (D == 0) {
        let x = (-b/(2*a));
        arr.push(x);
        console.log(x);
    } else if (D < 0) {
        console.log(arr);
    } else {
        arr.push((-b+Math.sqrt(D))/(2*a));
        arr.push((-b-Math.sqrt(D))/(2*a));
        // console.log(x1, x2); 
    }
    return arr; // array
  }

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let perc = parseInt(percent);
  let contrib = parseInt(contribution);
  let amou = parseInt(amount);
      if (isNaN(perc) || perc < 0) {
            return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
      } else if (isNaN(contrib) || contrib < 0) {
            return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
      } else if (isNaN(amou) || amou < 0) {
            return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
      } else {
                  let today = new Date();
                  if(today.getFullYear() > date.getFullYear()) {
                        return `Параметр "Срок ипотеки" содержит неправильное значение ${date}`;
                  } else {
                        let S = amou - contrib;
                        let n = date.getMonth() - today.getMonth() + (12*(date.getFullYear() - today.getFullYear()));
                        let P = perc/100/12;
                        let pay = S*(P+P/(((1+P)**n-1)));
                        totalAmount = (n*pay).toFixed(2);
                        console.log(totalAmount);
                  }
      }
  return +totalAmount;
}
