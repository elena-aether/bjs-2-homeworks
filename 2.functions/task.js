// Задание 1
  let getArrayParams = (arr) => { 
      let min = arr[0];
      let max = arr[arr.length - 1];
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] > max) {
              max = arr[i]
          } else if (arr[i] < min) {
          min = arr [i];
          };
          sum += arr[i]
      };
      avg = (sum / arr.length).toFixed(2);
      avg = parseFloat(avg);     
      return { min: min, max: max, avg: avg };
  };
  
// Задание 2
function worker(arr) {
 let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
   };
   console.log(sum);
  return sum;
};

function makeWork(arrOfArr, func) {
  let max = 0;
    for (let i = 0; i < arrOfArr.length; i++) { 
      if (func(arrOfArr[i]) > max) {
        max = func(arrOfArr[i]);
        };
    };
  return max;
};

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[arr.length - 1];
  let diff = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i]
      } else if (arr[i] < min) {
          min = arr [i];
          };
      };
      diff = Math.abs(max - min);
   console.log(diff);
  return diff;
};