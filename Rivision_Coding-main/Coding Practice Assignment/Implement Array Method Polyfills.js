Array.prototype.myIncludes = function (searchElement, fromIndex = 0) {
  const len = this.length;
  if (len === 0) return false;
  let start = fromIndex >= 0 ? fromIndex : len + fromIndex;
  for (let i = start; i < len; i++) {
    if (this[i] === searchElement || (Number.isNaN(this[i]) && Number.isNaN(searchElement))) {
      return true;
    }
  }
  return false;
};

Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== "function") throw new TypeError(callback + " is not a function");
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) result[i] = callback.call(thisArg, this[i], i, this);
  }
  return result;
};

Array.prototype.myForEach = function (callback, thisArg) {
  if (typeof callback !== "function") throw new TypeError(callback + " is not a function");
  for (let i = 0; i < this.length; i++) {
    if (i in this) callback.call(thisArg, this[i], i, this);
  }
};

Array.prototype.mySort = function (compareFn) {
  const arr = [...this];
  const comparator = compareFn
    ? compareFn
    : (a, b) => {
        const A = String(a);
        const B = String(b);
        if (A < B) return -1;
        if (A > B) return 1;
        return 0;
      };
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (comparator(arr[j], arr[j + 1]) > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

// Example usage
const nums = [3, 1, 4, 2];
console.log(nums.myIncludes(4)); // true
console.log(nums.myMap(x => x * 2)); // [6, 2, 8, 4]
nums.myForEach(x => console.log(x * 3)); // 9, 3, 12, 6
console.log(nums.mySort()); // [1, 2, 3, 4]
console.log(nums.mySort((a, b) => b - a)); // [4, 3, 2, 1]
