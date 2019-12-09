
function filter(input, than) {
  var arr = [],
    arr = arr.concat(input),
    i = 0;

  while (i < arr.length) {
    if (arr[i] < than) {
      arr.splice(i, 1)
      continue
    }
    i++
  }
  return arr

}

var array = [12, 100, 34, 65, 10];
var result = filter(array, 60);
console.log(result); // [100, 65];

var result = filter(array, 20);
console.log(result); // [100, 34, 65];
