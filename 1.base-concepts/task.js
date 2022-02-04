function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [x1, x2];
    console.log('roots:' +arr)

  } else if (d === 0) {
    let x1 = -b / (2 * a);
    arr = [x1];
    console.log('roots:' +arr)

  } else if (d < 0) {
   arr = []; 
   console.log('roots:' +arr)

  } else {
  console.log('incorrect input')
};
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
