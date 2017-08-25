// function biggestNum(arr) {
//   return Math.max.apply(null,arr);
// }

function biggestNum(arr) {
  var largest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

biggestNum([13, 2, 309, 1, 20]);
