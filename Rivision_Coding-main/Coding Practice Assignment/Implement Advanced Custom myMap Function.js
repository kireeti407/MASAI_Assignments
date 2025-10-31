function myMap(array, callback, thisArg) {
  const result = new Array(array.length);
  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      result[i] = callback.call(thisArg, array[i], i, array);
    }
  }
  return result;
}

const numbers = [1, , 3, 4];
const context = { factor: 2 };

const multiplied = myMap(numbers, function (num) {
  return num * this.factor;
}, context);

console.log(multiplied); // [2, <1 empty item>, 6, 8]
