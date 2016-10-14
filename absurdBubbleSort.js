const readline = require("readline");

const reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});

function absurdBubbleSort(arr, sortCompletionCallback) {
   function outerBubbleSortLoop (madeAnySwaps) {
    if (madeAnySwaps){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}


function askIfGreaterThan(el1, el2, callback) {
  reader.question(`is ${el1} greater than ${el2}? `, userInput => {
    if (userInput === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  })
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], isGreaterThan => {
      if (isGreaterThan) {
        let j = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = j;
        madeAnySwaps = true;
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
      } else {
        madeAnySwaps = false;
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
      }
    });
  } else if (i ===  arr.length-1 ) {
    outerBubbleSortLoop(madeAnySwaps);
  }
  return ""
}

console.log(absurdBubbleSort([1,3,2,5,4], arr => {
  console.log(arr);
  reader.close();
}));
