
function filter(input, than) {
  var arr = [],
    arr = arr.concat(input),
    i = 0;

  if (input.length == 0) {
    throw new Error('В input передан пустой массив')
  }

  while (i < arr.length) {
    if (!Number.isFinite(arr[i])) {
      throw new Error('Один из элементов input не является числом')
    } else if (arr[i] < 0) {
      throw new Error('Один из элементов input является отрицательным числом')
    }
    if (arr[i] < than) {
      arr.splice(i, 1)
      continue
    }
    i++
  }
  return arr

}

var array = [];

try {
  var result = filter(array, 60);
  console.log(result); // [100, 65];
} catch (e) {
  console.log(e.message)
}

try {
  var result = filter(array, 20);
  console.log(result); // [100, 65];
} catch (error) {
  console.log(error.message)
}
